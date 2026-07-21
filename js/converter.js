/* ==========================================
   VidToolkit Pro - Universal File Converter
   Part 1
========================================== */

const fromFormat = document.getElementById("fromFormat");
const toFormat = document.getElementById("toFormat");
const fileInput = document.getElementById("fileInput");
const convertBtn = document.getElementById("convertBtn");
const progressBar = document.getElementById("progressBar");
const downloadBtn = document.getElementById("downloadBtn");

/* Create file information box */

const fileInfo = document.createElement("div");
fileInfo.className = "fileInfo";
fileInfo.style.display = "none";

const uploadArea =
document.querySelector(".uploadArea") ||
document.querySelector(".uploadBox");

if(uploadArea){
    uploadArea.appendChild(fileInfo);
}

let selectedFile = null;

/* -----------------------------
   File Size Formatter
------------------------------ */

function formatFileSize(bytes){

    if(bytes < 1024){
        return bytes + " Bytes";
    }

    if(bytes < 1024 * 1024){
        return (bytes/1024).toFixed(2) + " KB";
    }

    if(bytes < 1024 * 1024 * 1024){
        return (bytes/(1024*1024)).toFixed(2) + " MB";
    }

    return (bytes/(1024*1024*1024)).toFixed(2) + " GB";

}

/* -----------------------------
   Display Selected File
------------------------------ */

function showFile(file){

    selectedFile = file;

    fileInfo.style.display = "block";

    fileInfo.innerHTML = `
        <strong>Selected File</strong><br><br>

        📄 ${file.name}<br>

        📦 ${formatFileSize(file.size)}
    `;

}

/* -----------------------------
   File Validation
------------------------------ */

function validateFile(file){

    if(!file){

        alert("Please select a file.");

        return false;

    }

    const maxSize = 100 * 1024 * 1024;

    if(file.size > maxSize){

        alert("Maximum file size is 100 MB.");

        return false;

    }

    return true;

}

/* -----------------------------
   File Input
------------------------------ */

fileInput.addEventListener("change",function(){

    if(this.files.length===0){

        return;

    }

    const file = this.files[0];

    if(validateFile(file)){

        showFile(file);

    }

});

/* -----------------------------
   Drag & Drop
------------------------------ */

if(uploadArea){

uploadArea.addEventListener("dragover",function(e){

    e.preventDefault();

    this.style.borderColor="#16a34a";

    this.style.background="#eefdf2";

});

uploadArea.addEventListener("dragleave",function(){

    this.style.borderColor="#2563eb";

    this.style.background="#f8fbff";

});

uploadArea.addEventListener("drop",function(e){

    e.preventDefault();

    this.style.borderColor="#2563eb";

    this.style.background="#f8fbff";

    if(e.dataTransfer.files.length===0){

        return;

    }

    const file = e.dataTransfer.files[0];

    if(validateFile(file)){

        fileInput.files = e.dataTransfer.files;

        showFile(file);

    }

});

}
/* ==========================================
   Part 2
   Dynamic Format Mapping + Convert Logic
========================================== */

const conversionMap = {

PDF:[
"Word",
"JPG",
"PNG",
"Excel",
"PowerPoint",
"Text"
],

Word:[
"PDF"
],

JPG:[
"PDF"
],

PNG:[
"PDF"
],

Excel:[
"PDF"
],

PowerPoint:[
"PDF"
],

HTML:[
"PDF"
],

Text:[
"PDF"
]

};

/* --------------------------
   Update Convert To Options
--------------------------- */

function updateFormats(){

const from = fromFormat.value;

toFormat.innerHTML="";

conversionMap[from].forEach(function(item){

const option=document.createElement("option");

option.value=item;

option.textContent=item;

toFormat.appendChild(option);

});

}

updateFormats();

fromFormat.addEventListener("change",updateFormats);

/* --------------------------
   Convert Button
--------------------------- */

convertBtn.addEventListener("click",function(){

if(selectedFile===null){

alert("Please select a file first.");

return;

}

startConversion();

});

/* --------------------------
   Fake Conversion Process
--------------------------- */

function startConversion(){

convertBtn.disabled=true;

convertBtn.innerHTML="<i class='fa-solid fa-spinner fa-spin'></i> Converting...";

progressBar.style.display="block";

progressBar.value=0;

downloadBtn.style.display="none";

let progress=0;

const timer=setInterval(function(){

progress+=5;

progressBar.value=progress;

if(progress>=100){

clearInterval(timer);

conversionFinished();

}

},120);

}

/* --------------------------
   Conversion Finished
--------------------------- */

function conversionFinished(){

convertBtn.disabled=false;

convertBtn.innerHTML="<i class='fa-solid fa-check'></i> Convert Again";

downloadBtn.style.display="inline-block";

downloadBtn.innerHTML="<i class='fa-solid fa-download'></i> Download File";

downloadBtn.href="#";

alert(
"Demo completed.\n\nConnect a real conversion backend or API to generate downloadable files."
);

}
/* ==========================================
   Part 3
   Professional UI + Backend Ready
========================================== */

/* --------------------------
   Status Message
--------------------------- */

const statusBox = document.createElement("div");
statusBox.className = "statusBox";

if (uploadArea) {
    uploadArea.parentNode.insertBefore(statusBox, uploadArea.nextSibling);
}

function showStatus(message, type = "info") {

    statusBox.innerHTML = message;
    statusBox.className = "statusBox " + type;

    setTimeout(() => {
        statusBox.innerHTML = "";
        statusBox.className = "statusBox";
    }, 4000);

}

/* --------------------------
   File Type Detection
--------------------------- */

function detectExtension(fileName){

    return fileName.split(".").pop().toUpperCase();

}

fileInput.addEventListener("change",function(){

    if(this.files.length===0) return;

    const ext=detectExtension(this.files[0].name);

    if(ext!==fromFormat.value.toUpperCase()){

        showStatus(
        "Selected file appears to be <b>"+ext+
        "</b>. You selected <b>"+fromFormat.value+
        "</b> as input.",
        "warning");

    }else{

        showStatus(
        "File loaded successfully.",
        "success");

    }

});

/* --------------------------
   Download Button
--------------------------- */

downloadBtn.addEventListener("click",function(e){

    e.preventDefault();

    showStatus(
    "Connect a real conversion API to generate downloadable files.",
    "info");

});

/* --------------------------
   Reset Converter
--------------------------- */

function resetConverter(){

    progressBar.value=0;

    progressBar.style.display="none";

    downloadBtn.style.display="none";

    fileInput.value="";

    selectedFile=null;

    fileInfo.style.display="none";

    convertBtn.innerHTML=
    "<i class='fa-solid fa-rotate'></i> Convert Now";

}

convertBtn.addEventListener("dblclick",resetConverter);

/* --------------------------
   Keyboard Shortcut
--------------------------- */

document.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        if(document.activeElement===fileInput){

            return;

        }

        if(selectedFile){

            convertBtn.click();

        }

    }

});

/* --------------------------
   Backend Ready Function
--------------------------- */

async function convertUsingBackend(){

/*

Example

const formData=new FormData();

formData.append("file",selectedFile);

formData.append("from",fromFormat.value);

formData.append("to",toFormat.value);

const response=await fetch("YOUR_API_ENDPOINT",{

method:"POST",

body:formData

});

const blob=await response.blob();

downloadBtn.href=URL.createObjectURL(blob);

downloadBtn.download=
"converted."+toFormat.value.toLowerCase();

downloadBtn.style.display="inline-block";

*/

}

/* --------------------------
   Initial Status
--------------------------- */

showStatus(
"Ready to convert your files.",
"success");
