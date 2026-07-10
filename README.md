<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport"
content="width=device-width,initial-scale=1">

<title>Saathi Website Builder Pro</title>

<style>

/* ========= RESET ========= */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Segoe UI,Arial,sans-serif;
}

body{
  background:#f4f7fc;
  color:#222;
}

/* ========= LOADER ========= */

#loader{
  position:fixed;
  inset:0;
  background:white;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:9999;
}

.spinner{
  width:70px;
  height:70px;
  border:8px solid #eee;
  border-top:8px solid #2563eb;
  border-radius:50%;
  animation:spin 1s linear infinite;
}

@keyframes spin{
  to{
    transform:rotate(360deg);
  }
}

/* ========= SCREENS ========= */

.screen{
  display:none;
}

.active{
  display:block;
}

/* ========= LOGIN ========= */

.login-page{
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:20px;
}

.login-card{
  width:100%;
  max-width:420px;
  background:white;
  padding:40px;
  border-radius:25px;
  box-shadow:0 10px 35px rgba(0,0,0,.1);
}

.logo{
  font-size:32px;
  text-align:center;
  color:#2563eb;
  font-weight:bold;
}

.subtitle{
  text-align:center;
  color:#666;
  margin:15px 0 30px;
}

.input{
  width:100%;
  padding:15px;
  margin-bottom:15px;
  border:none;
  border-radius:12px;
  background:#f3f5fa;
}

.btn{
  width:100%;
  padding:15px;
  border:none;
  border-radius:12px;
  background:#2563eb;
  color:white;
  margin-bottom:10px;
  cursor:pointer;
}

/* ========= DASHBOARD ========= */

.dashboard{
  display:flex;
  min-height:100vh;
}

.sidebar{
  width:260px;
  background:#111827;
  color:white;
  padding:25px;
}

.menu{
  margin-top:30px;
}

.menu div{
  padding:15px;
  margin-bottom:10px;
  border-radius:12px;
  cursor:pointer;
}

.menu div:hover{
  background:#1f2937;
}

.main{
  flex:1;
}

.topbar{
  background:white;
  padding:20px;
  box-shadow:0 2px 10px rgba(0,0,0,.05);
}

.content{
  padding:25px;
}

.cards{
  display:grid;
  grid-template-columns:
  repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
}

.card{
  background:white;
  border-radius:20px;
  padding:25px;
  box-shadow:0 5px 20px rgba(0,0,0,.06);
}

/* ========= TEMPLATE GRID ========= */

.template-grid{
  display:grid;
  grid-template-columns:
  repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
}

.template{
  background:white;
  border-radius:20px;
  padding:20px;
  text-align:center;
  box-shadow:0 5px 20px rgba(0,0,0,.06);
}

/* ========= EDITOR ========= */

.editor{
  display:flex;
  height:100vh;
}

.left{
  width:260px;
  background:white;
  padding:20px;
  overflow:auto;
}

.canvas{
  flex:1;
  background:#f9fafb;
  padding:25px;
  overflow:auto;
}

.right{
  width:300px;
  background:white;
  padding:20px;
}

.element{
  background:#2563eb;
  color:white;
  padding:12px;
  border-radius:10px;
  margin-bottom:10px;
  cursor:pointer;
}

.block{
  background:white;
  padding:20px;
  border-radius:15px;
  margin-bottom:15px;
  box-shadow:0 3px 10px rgba(0,0,0,.08);
}

@media(max-width:900px){

.sidebar{
  display:none;
}

.right{
  display:none;
}

}

</style>
</head>
<body>

<!-- LOADER -->

<div id="loader">
  <div class="spinner"></div>
</div>

<!-- LOGIN -->

<div
id="loginScreen"
class="screen active">

<div class="login-page">

<div class="login-card">

<div class="logo">
🌐 Saathi Builder
</div>

<div class="subtitle">
Create Websites Without Coding
</div>

<input
id="email"
class="input"
type="email"
placeholder="Email">

<input
id="password"
class="input"
type="password"
placeholder="Password">

<button
id="loginBtn"
class="btn">
Login
</button>

<button
id="registerBtn"
class="btn">
Create Account
</button>

<button
id="forgotBtn"
class="btn">
Forgot Password
</button>

</div>

</div>

</div>

<!-- DASHBOARD -->

<div id="dashboardScreen" class="screen">

    <div class="dashboard">
       ...
    </div>

</div>

<div id="editorScreen" class="screen">

    <div class="editor">
       ...
    </div>

</div>

<h3>Elements</h3>
<br>

<div
class="element"
id="addTextBtn">

➕ Text

</div>

<div
class="element"
id="addButtonBtn">

🔘 Button

</div>

<div
class="element"
id="addImageBtn">

🖼 Image

</div>

<br>

<button
class="btn"
id="saveWebsiteBtn">

💾 Save Website

</button>

<br><br>

<button
class="btn"
id="backBtn">

← Back

</button>


<div
class="canvas"
id="canvas">

</div>

<div class="right">

<h3>
Properties
</h3>

<p>
Select an element to edit.
</p>

</div>


<div class="dashboard">

<div class="sidebar">

<h2>🌐 Saathi Builder</h2>

<div class="menu">

<div id="homeMenu">
🏠 Dashboard
</div>

<div id="templatesMenu">
🎨 Templates
</div>

<div id="editorMenu">
🛠 Builder
</div>

<div id="publishMenu">
🚀 Publish
</div>

<div id="analyticsMenu">
📊 Analytics
</div>

<div id="logoutBtn">
🚪 Logout
</div>

</div>

</div>

<div class="main">

<div class="topbar">
<h2 id="title">
Dashboard
</h2>
</div>

<div style="margin-bottom:25px;">

<button
id="createWebsiteBtn"
class="btn"
style="
width:auto;
padding:15px 25px;
">

➕ Create Website

</button>

</div>

<div
id="websiteContainer"
class="cards">

</div>

<div class="cards">

<div class="card">
<h3>My Websites</h3>
<h1>0</h1>
</div>

<div class="card">
<h3>Plan</h3>
<h1>FREE</h1>
</div>

<div class="card">
<h3>Views</h3>
<h1>0</h1>
</div>

</div>

</div>

</div>

</div>

</div>

<!-- FIREBASE COMPAT -->

<script src="https://www.gstatic.com/firebasejs/12.16.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/12.16.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/12.16.0/firebase-storage-compat.js"></script>

<script>

/* LOADER */

window.onload=function(){

document.getElementById(
"loader"
).style.display="none";

};

/* FIREBASE */

const firebaseConfig = {
    apiKey: "AIzaSyCQfLiA_gG-hFvHyynK9tppuHPrLKL_LpQ",
    authDomain: "website-builder-236cf.firebaseapp.com",
    databaseURL: "https://website-builder-236cf-default-rtdb.firebaseio.com",
    projectId: "website-builder-236cf",
    storageBucket: "website-builder-236cf.firebasestorage.app",
    messagingSenderId: "325126865330",
    appId: "1:325126865330:web:1b46f2a17298a6786364ab",
    measurementId: "G-1LF62G7529"
  };

firebase.initializeApp(
firebaseConfig
);

const auth =
firebase.auth();

const db =
firebase.firestore();

const storage =
firebase.storage();
const loginScreen =
document.getElementById(
"loginScreen"
);

const dashboardScreen =
document.getElementById(
"dashboardScreen"
);

let websiteContainer =
document.getElementById(
"websiteContainer"
);

const editorScreen =
document.getElementById(
"editorScreen"
);

const canvas =
document.getElementById(
"canvas"
);

const addTextBtn =
document.getElementById(
"addTextBtn"
);

const addButtonBtn =
document.getElementById(
"addButtonBtn"
);

const addImageBtn =
document.getElementById(
"addImageBtn"
);

const saveWebsiteBtn =
document.getElementById(
"saveWebsiteBtn"
);

const backBtn =
document.getElementById(
"backBtn"
);

const createWebsiteBtn =
document.getElementById(
"createWebsiteBtn"
);


/* SCREEN SWITCH */

function showDashboard(){

document.getElementById(
"loginScreen"
).style.display="none";

document.getElementById(
"dashboardScreen"
).style.display="block";

}

/* TEMP LOGIN */

/* ========= LOGIN ========= */

loginBtn.onclick =
async function(){

const email =
document
.getElementById(
"email"
)
.value
.trim();

const password =
document
.getElementById(
"password"
)
.value
.trim();

if(
!email ||
!password
){
alert(
"Enter email and password."
);
return;
}

try{

document
.getElementById(
"loader"
)
.style.display =
"flex";

await auth
.signInWithEmailAndPassword(
email,
password
);

}
catch(e){

alert(
e.message
);

}

document
.getElementById(
"loader"
)
.style.display =
"none";

};


/* ========= REGISTER ========= */

registerBtn.onclick =
async function(){

const email =
document
.getElementById(
"email"
)
.value
.trim();

const password =
document
.getElementById(
"password"
)
.value
.trim();

if(
!email ||
!password
){
alert(
"Enter email and password."
);
return;
}

try{

document
.getElementById(
"loader"
)
.style.display =
"flex";

const result =
await auth
.createUserWithEmailAndPassword(
email,
password
);

await db
.collection(
"users"
)
.doc(
result.user.uid
)
.set({

email:
email,

plan:
"FREE",

websites:
0,

views:
0,

created:
new Date()

});

alert(
"Account Created"
);

}
catch(e){

alert(
e.message
);

}

document
.getElementById(
"loader"
)
.style.display =
"none";

};


/* ========= FORGOT PASSWORD ========= */

forgotBtn.onclick =
async function(){

const email =
document
.getElementById(
"email"
)
.value
.trim();

if(
!email
){
alert(
"Enter email."
);
return;
}

try{

await auth
.sendPasswordResetEmail(
email
);

alert(
"Password reset email sent."
);

}
catch(e){

alert(
e.message
);

}

};


/* ========= AUTO LOGIN ========= */

auth
.onAuthStateChanged(
async function(
user
){

if(user){

    showDashboard();
    loadWebsites();

    document
    .getElementById(
    "title"
    )
    .innerHTML =
    "Welcome";

document
.getElementById(
"title"
)
.innerHTML =
"Welcome";

}
else{

document
.getElementById(
"loginScreen"
)
.style.display =
"block";

document
.getElementById(
"dashboardScreen"
)
.style.display =
"none";

}

});


/* ========= LOGOUT ========= */

logoutBtn.onclick =
function(){

auth
.signOut();

location.reload();

};
/* ========= CREATE WEBSITE ========= */

createWebsiteBtn.onclick =
async function(){

const name =
prompt(
"Website Name"
);

if(
!name
)return;

const template =
prompt(
"Template:\n\nSchool\nShop\nRestaurant\nPortfolio"
);

if(
!template
)return;

const user =
auth.currentUser;

if(
!user
)return;

try{

await db
.collection(
"websites"
)
.add({

uid:
user.uid,

name:
name,

template:
template,

created:
new Date(),

views:
0

});

loadWebsites();

}
catch(e){

alert(
e.message
);

}

};
/* ========= LOAD WEBSITES ========= */

async function
loadWebsites(){

websiteContainer
.innerHTML =
"Loading...";

const user =
auth.currentUser;

if(
!user
)return;

try{

const snapshot =
await db
.collection(
"websites"
)
.where(
"uid",
"==",
user.uid
)
.get();

websiteContainer
.innerHTML =
"";

snapshot
.forEach(
doc=>{

const data =
doc.data();

const card =
document
.createElement(
"div"
);

card.className =
"card";

card.innerHTML =

`
<h3>
${data.name}
</h3>

<p>
Template:
${data.template}
</p>

<p>
Views:
${data.views}
</p>

<br>

<button
onclick="
openWebsite(
'${doc.id}'
)
"
class="btn">

Open

</button>

<button
onclick="
deleteWebsite(
'${doc.id}'
)
"
class="btn"
style="
background:red;
margin-top:10px;
">

Delete

</button>

`;

websiteContainer
.appendChild(
card
);

});

}
catch(e){

websiteContainer
.innerHTML =
e.message;

}

}
/* ========= DELETE WEBSITE ========= */

async function
deleteWebsite(
id
){

const ok =
confirm(
"Delete website?"
);

if(
!ok
)return;

try{

await db
.collection(
"websites"
)
.doc(
id
)
.delete();

loadWebsites();

}
catch(e){

alert(
e.message
);

}

}
/* ========= OPEN WEBSITE ========= */

async function
openWebsite(
id
){

localStorage
.setItem(
"currentWebsite",
id
);

dashboardScreen
.style.display =
"none";

editorScreen
.style.display =
"block";

loadEditor();

}
async function
loadEditor(){

canvas.innerHTML =
"";

const id =
localStorage
.getItem(
"currentWebsite"
);

if(
!id
)return;

const doc =
await db
.collection(
"websites"
)
.doc(
id
)
.get();

const data =
doc.data();

if(
!data
)return;

/* TEMPLATE */

if(
data.content
){

canvas.innerHTML =
data.content;

}
else{

canvas.innerHTML =

`
<div class="block">

<h1>
${data.name}
</h1>

<p>
Template:
${data.template}
</p>

</div>
`;

}
}
addTextBtn.onclick =
function(){

canvas.innerHTML +=

`
<div class="block">

<h2>
New Text
</h2>

</div>
`;

};
addButtonBtn.onclick =
function(){

canvas.innerHTML +=

`
<div class="block">

<button
class="btn">

Click Me

</button>

</div>
`;

};
addImageBtn.onclick =
function(){

canvas.innerHTML +=

`
<div class="block">

<img
src=
"https://placehold.co/600x250"
style="
width:100%;
border-radius:15px;
">

</div>
`;

};
saveWebsiteBtn.onclick =
async function(){

const id =
localStorage
.getItem(
"currentWebsite"
);

if(
!id
)return;

try{

await db
.collection(
"websites"
)
.doc(
id
)
.update({

content:
canvas.innerHTML

});

alert(
"Website Saved"
);

}
catch(e){

alert(
e.message
);

}

};
backBtn.onclick =
function(){

editorScreen
.style.display =
"none";

dashboardScreen
.style.display =
"block";

loadWebsites();

};
</script>

</body>
</html>
