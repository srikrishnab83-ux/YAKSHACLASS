document.addEventListener("DOMContentLoaded", () => {

const from = document.getElementById("fromFormat");
const to = document.getElementById("toFormat");
const fileInput = document.getElementById("fileInput");
const convertBtn = document.getElementById("convertBtn");
const progressBar = document.getElementById("progressBar");
const downloadBtn = document.getElementById("downloadBtn");

const formats = {

PDF:["Word","JPG","PNG","Excel","PowerPoint","Text"],

Word:["PDF"],

JPG:["PDF"],

PNG:["PDF"],

Excel:["PDF"],

PowerPoint:["PDF"],

HTML:["PDF"],

Text:["PDF"]

};

function updateFormats(){

const list = formats[from.value];

to.innerHTML="";

list.forEach(item=>{

const option=document.createElement("option");

option.value=item;

option.textContent=item;

to.appendChild(option);

});

}

updateFormats();

from.addEventListener("change",updateFormats);

convertBtn.addEventListener("click",()=>{

if(fileInput.files.length===0){

alert("Please choose a file first.");

return;

}

progressBar.style.display="block";

progressBar.value=0;

downloadBtn.style.display="none";

let progress=0;

const timer=setInterval(()=>{

progress+=5;

progressBar.value=progress;

if(progress>=100){

clearInterval(timer);

alert(
"Conversion completed.\n\nThis demo is ready for backend integration.\nActual file conversion will work after connecting a conversion API."
);

downloadBtn.style.display="inline-block";

downloadBtn.textContent="Download Converted File";

downloadBtn.href="#";

}

},100);

});

downloadBtn.addEventListener("click",(e)=>{

e.preventDefault();

alert("Backend/API is required to download the converted file.");

});

fileInput.addEventListener("change",()=>{

if(fileInput.files.length){

convertBtn.textContent="Convert: "+fileInput.files[0].name;

}else{

convertBtn.textContent="Convert File";

}

});

});
