const keyword = document.getElementById("keyword");
const platform = document.getElementById("platform");
const result = document.getElementById("result");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

const commonTags = [
"viral",
"trending",
"explore",
"creator",
"contentcreator",
"socialmedia",
"growth",
"digital",
"marketing",
"video",
"reels",
"shorts",
"instagood",
"photooftheday",
"love",
"follow",
"like",
"photography",
"youtube",
"facebook",
"tiktok",
"instagram",
"technology",
"tutorial",
"tips",
"online",
"free",
"best",
"creative",
"new"
];

generateBtn.addEventListener("click", () => {

let key = keyword.value.trim().toLowerCase();

if(key===""){
alert("Please enter a keyword.");
return;
}

let tags=[];

tags.push("#"+key);
tags.push("#"+key+"tips");
tags.push("#"+key+"lover");
tags.push("#"+key+"life");
tags.push("#"+key+"daily");
tags.push("#"+key+"community");
tags.push("#"+key+"world");
tags.push("#"+key+"ideas");
tags.push("#"+key+"guide");
tags.push("#"+key+"expert");

commonTags.forEach(tag=>{
tags.push("#"+tag);
});

if(platform.value==="instagram"){
tags.push("#instareels");
tags.push("#instadaily");
tags.push("#igers");
tags.push("#reelitfeelit");
}

if(platform.value==="youtube"){
tags.push("#youtuber");
tags.push("#youtubechannel");
tags.push("#youtubecreator");
tags.push("#youtubeshorts");
}

if(platform.value==="facebook"){
tags.push("#facebookpage");
tags.push("#facebookmarketing");
tags.push("#fbcreator");
}

if(platform.value==="tiktok"){
tags.push("#fyp");
tags.push("#foryou");
tags.push("#foryoupage");
tags.push("#tiktokviral");
}

tags=[...new Set(tags)];

result.value=tags.join(" ");

});

copyBtn.addEventListener("click",()=>{

if(result.value===""){
alert("Generate hashtags first.");
return;
}

navigator.clipboard.writeText(result.value);

alert("Copied!");

});

clearBtn.addEventListener("click",()=>{

keyword.value="";
result.value="";

});