import { createClient } from '@supabase/supabase-js'
import pdf from 'pdf-poppler'
import fs from 'fs'
import path from 'path'
import { tmpdir } from 'os'
import fetch from 'node-fetch'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export const config = {
  api: { bodyParser: { sizeLimit: '10mb' }
}

export default async function handler(req, res) {
  if (req.method!== 'POST') return res.status(405).json({ error: 'POST only' })
  
  try {
    const { fileUrl } = req.body
    if (!fileUrl) return res.status(400).json({ error: 'fileUrl required' })

    // Download PDF
    const pdfRes = await fetch(fileUrl)
    const pdfBuffer = await pdfRes.arrayBuffer()
    const tmpPdf = path.join(tmpdir(), `input-${Date.now()}.pdf`)
    fs.writeFileSync(tmpPdf, Buffer.from(pdfBuffer))

    // Convert to JPG
    const opts = { format: 'jpeg', out_dir: tmpdir(), out_prefix: `page-${Date.now()}`, page: null }
    const images = await pdf.convert(tmpPdf, opts)
    
    // Upload first page to Supabase
    const jpgPath = images[0]
    const jpgBuffer = fs.readFileSync(jpgPath)
    const fileName = `pdf-${Date.now()}.jpg`
    
    const { data, error } = await supabase.storage
     .from('uploads')
     .upload(fileName, jpgBuffer, { contentType: 'image/jpeg' })
    
    if (error) throw error

    const { data: urlData } = supabase.storage.from('uploads').getPublicUrl(fileName)
    
    // Cleanup
    fs.unlinkSync(tmpPdf)
    fs.unlinkSync(jpgPath)

    res.status(200).json({ downloadUrl: urlData.publicUrl })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
