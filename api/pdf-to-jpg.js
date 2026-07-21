import { createClient } from '@supabase/supabase-js'
import { PDF2Pic } from 'pdf2pic'
import fs from 'fs'
import path from 'path'
import { tmpdir } from 'os'
import fetch from 'node-fetch'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export const config = { api: { bodyParser: { sizeLimit: '50mb' } }

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' })
  
  try {
    const { fileUrl } = req.body
    if (!fileUrl) return res.status(400).json({ error: 'fileUrl required' })

    // 1. Download PDF
    const pdfRes = await fetch(fileUrl)
    const pdfBuffer = Buffer.from(await pdfRes.arrayBuffer())
    const tmpPdf = path.join(tmpdir(), `input-${Date.now()}.pdf`)
    fs.writeFileSync(tmpPdf, pdfBuffer)

    // 2. Convert PDF to JPG with pdf2pic
    const convert = new PDF2Pic({
      density: 200,
      savename: `page`,
      savedir: tmpdir(),
      format: "jpeg",
      size: "1920x1080"
    })
    
    const result = await convert.convertBulk(pdfBuffer, 1) // 1 = convert first page only
    const jpgPath = result[0].path
    const jpgBuffer = fs.readFileSync(jpgPath)
    
    // 3. Upload to Supabase
    const fileName = `pdf-${Date.now()}.jpg`
    const { error } = await supabase.storage.from('uploads').upload(fileName, jpgBuffer, { contentType: 'image/jpeg' })
    if (error) throw error

    const { data: urlData } = supabase.storage.from('uploads').getPublicUrl(fileName)
    
    // 4. Cleanup
    fs.unlinkSync(tmpPdf)
    fs.unlinkSync(jpgPath)

    res.status(200).json({ downloadUrl: urlData.publicUrl })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
