<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Saathi Website Builder</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<style>

:root{
  --primary:#2563eb;
  --secondary:#111827;
  --bg:#f1f5f9;
  --card:#ffffff;
  --text:#1f2937;
  --border:#d1d5db;
}

*{
  box-sizing:border-box;
  margin:0;
  padding:0;
  font-family:Arial, Helvetica, sans-serif;
}

body{
  background:var(--bg);
  color:var(--text);
}

.hidden{
  display:none !important;
}

.screen{
  display:none;
}

.active{
  display:block;
}

header{
  background:var(--secondary);
  color:white;
  padding:18px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-wrap:wrap;
}

.logo{
  font-size:24px;
  font-weight:bold;
}

.logo small{
  display:block;
  font-size:12px;
  opacity:.8;
}

button{
  border:0;
  cursor:pointer;
  background:var(--primary);
  color:white;
  padding:12px 16px;
  border-radius:10px;
  margin:4px;
}

button.secondary{
  background:#475569;
}

button.danger{
  background:#dc2626;
}

input,
select,
textarea{
  width:100%;
  padding:12px;
  border:1px solid var(--border);
  border-radius:10px;
  margin-top:8px;
  margin-bottom:12px;
}

textarea{
  min-height:120px;
  resize:vertical;
}

.container{
  max-width:1200px;
  margin:auto;
  padding:20px;
}

.card{
  background:var(--card);
  border-radius:16px;
  padding:20px;
  margin-bottom:20px;
  box-shadow:0 4px 20px rgba(0,0,0,.08);
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
}

.stat{
  font-size:32px;
  font-weight:bold;
  color:var(--primary);
}

.site-card{
  border:1px solid var(--border);
  border-radius:15px;
  padding:15px;
}

.template-card{
  border:1px solid var(--border);
  border-radius:15px;
  padding:20px;
  text-align:center;
}

.template-icon{
  font-size:55px;
  margin-bottom:15px;
}

.editor{
  min-height:500px;
  background:white;
  border-radius:16px;
  padding:20px;
  border:2px dashed #cbd5e1;
}

.block{
  background:#f8fafc;
  padding:20px;
  border-radius:12px;
  margin-bottom:15px;
}

.theme-buttons button{
  width:100%;
}

/* Themes */

.theme-blue{
  --primary:#2563eb;
  --secondary:#111827;
  --bg:#f1f5f9;
  --card:#ffffff;
}

.theme-dark{
  --primary:#0ea5e9;
  --secondary:#000000;
  --bg:#111827;
  --card:#1f2937;
  --text:#f9fafb;
  --border:#374151;
}

.theme-green{
  --primary:#059669;
  --secondary:#064e3b;
  --bg:#ecfdf5;
  --card:#ffffff;
}

.theme-purple{
  --primary:#7c3aed;
  --secondary:#312e81;
  --bg:#f5f3ff;
  --card:#ffffff;
}

.badge{
  display:inline-block;
  background:#f59e0b;
  color:white;
  padding:5px 12px;
  border-radius:30px;
  font-size:12px;
}

.topbar{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  gap:10px;
  align-items:center;
}

@media(max-width:700px){

  .logo{
    font-size:20px;
  }

  button{
    width:100%;
  }

}

</style>
</head>

<body class="theme-blue">

<header>

<div class="logo">
Saathi Website Builder
<small>Create websites for schools, shops and businesses</small>
</div>

<div id="topUser">
Guest
</div>

</header>

<!-- LOGIN SCREEN -->

<section id="loginScreen" class="screen active">

<div class="container">

<div class="card">

<h2>Login / Register</h2>
<br>

<input
id="email"
type="email"
placeholder="Email">

<input
id="password"
type="password"
placeholder="Password">

<button id="loginBtn">
Login
</button>

<button id="registerBtn">
Create Account
</button>

<button
class="secondary"
id="forgotBtn">
Forgot Password
</button>

</div>

</div>

</section>

<!-- MAIN APP -->

<section
id="appScreen"
class="screen">

<div class="container">

<div class="topbar">

<h2>Dashboard</h2>

<div>

<button id="createWebsiteBtn">
+ Create Website
</button>

<button
class="secondary"
id="marketBtn">
Templates
</button>

<button
class="secondary"
id="analyticsBtn">
Analytics
</button>

<button
class="secondary"
id="subscriptionBtn">
Plans
</button>

<button
class="secondary"
id="adminBtn">
Admin
</button>

<button
class="danger"
id="logoutBtn">
Logout
</button>

</div>

</div>

<!-- USER INFO -->

<div class="card">

<h3>Account Information</h3>
<br>

<div class="grid">

<div>
<p>Email</p>
<div
id="userEmail"
class="stat">
-
</div>
</div>

<div>
<p>Current Plan</p>
<div
id="userPlan"
class="stat">
FREE
</div>
</div>

<div>
<p>Total Websites</p>
<div
id="totalSites"
class="stat">
0
</div>
</div>

</div>

</div>

<!-- THEME SWITCHER -->

<div class="card">

<h3>Theme Switcher</h3>
<br>

<div class="grid theme-buttons">

<button id="themeBlue">
Blue Professional
</button>

<button id="themeDark">
Dark Modern
</button>

<button id="themeGreen">
Green Business
</button>

<button id="themePurple">
Purple Creative
</button>

</div>

</div>

<!-- WEBSITE LIST -->

<div class="card">

<h3>My Websites</h3>
<br>

<div
id="websiteList"
class="grid">

</div>

</div>

</div>

</section>

<!-- TEMPLATE MARKETPLACE -->

<section
id="templateScreen"
class="screen">

<div class="container">

<div class="card">

<h2>Website Templates</h2>

<p>
Choose a ready-made template and start building.
</p>

<br>

<div
id="templateGrid"
class="grid">

</div>

<br>

<button
class="secondary"
id="backDashboardBtn">
Back
</button>

</div>

</div>

</section>

<!-- WEBSITE EDITOR -->

<section
id="editorScreen"
class="screen">

<div class="container">

<div class="card">

<h2>Website Editor</h2>

<input
id="siteTitle"
placeholder="Website Name">

<select id="siteCategory">

<option value="">
Choose Category
</option>

<option>
School
</option>

<option>
Shop
</option>

<option>
Restaurant
</option>

<option>
Artist
</option>

<option>
Portfolio
</option>

<option>
Clinic
</option>

<option>
Event
</option>

</select>

<input
id="logoInput"
type="file">

<input
id="galleryInput"
type="file"
multiple>

<div>

<button id="uploadLogoBtn">
Upload Logo
</button>

<button id="uploadGalleryBtn">
Upload Gallery
</button>

<button id="saveWebsiteBtn">
Save
</button>

<button id="publishBtn">
Publish
</button>

<button
class="secondary"
id="downloadBtn">
Download HTML
</button>

<button
class="secondary"
id="backBtn">
Back
</button>

</div>

</div>

<div
id="editorArea"
class="editor">

<!-- Builder blocks will appear here -->

</div>

</div>

</section>
<!-- SUBSCRIPTION SCREEN -->

<section
id="subscriptionScreen"
class="screen">

<div class="container">

<div class="card">

<h2>Subscription Plans</h2>
<p>Upgrade your website builder plan.</p>

</div>

<div class="grid">

<div class="card">

<h3>FREE</h3>
<br>

<div class="stat">₹0</div>
<br>

<p>✓ 1 Website</p>
<p>✓ Basic Templates</p>
<p>✓ Basic Editor</p>
<p>✓ Ads Enabled</p>
<p>✓ Public Link</p>

<br>

<button disabled>
Current Plan
</button>

</div>

<div class="card">

<h3>PRO</h3>
<br>

<div class="stat">₹99</div>
<br>

<p>✓ 10 Websites</p>
<p>✓ Premium Templates</p>
<p>✓ No Advertisements</p>
<p>✓ Gallery Upload</p>
<p>✓ Analytics</p>
<p>✓ Download HTML</p>
<p>✓ Multilingual Websites</p>
<p>✓ 1GB Storage</p>

<br>

<button
id="buyProBtn">
Upgrade to PRO
</button>

</div>

<div class="card">

<h3>BUSINESS</h3>
<br>

<div class="stat">₹199</div>
<br>

<p>✓ Unlimited Websites</p>
<p>✓ All Premium Templates</p>
<p>✓ Advanced Analytics</p>
<p>✓ QR Code Support</p>
<p>✓ Priority Support</p>
<p>✓ Unlimited Storage</p>
<p>✓ Future Custom Domain</p>

<br>

<button
id="buyBusinessBtn">
Upgrade to BUSINESS
</button>

</div>

</div>

<div class="card">

<h3>Manual UPI Payment</h3>
<br>

<p><strong>UPI ID:</strong></p>

<h2>
9148014768@mbk
</h2>

<br>

<p>
After payment, upload the screenshot in the admin section for verification.
</p>

<br>

<button
class="secondary"
id="backPlansBtn">
Back
</button>

</div>

</div>

</section>





<!-- ANALYTICS SCREEN -->

<section
id="analyticsScreen"
class="screen">

<div class="container">

<div class="card">

<h2>Website Analytics</h2>

</div>

<div class="grid">

<div class="card">

<h3>Total Websites</h3>
<div
id="analyticsSites"
class="stat">
0
</div>

</div>

<div class="card">

<h3>Total Views</h3>
<div
id="analyticsViews"
class="stat">
0
</div>

</div>

<div class="card">

<h3>WhatsApp Clicks</h3>
<div
id="analyticsWhatsapp"
class="stat">
0
</div>

</div>

<div class="card">

<h3>Published Websites</h3>
<div
id="analyticsPublished"
class="stat">
0
</div>

</div>

</div>

<div class="card">

<button
class="secondary"
id="backAnalyticsBtn">
Back
</button>

</div>

</div>

</section>





<!-- ADMIN SCREEN -->

<section
id="adminScreen"
class="screen">

<div class="container">

<div class="card">

<h2>Admin Login</h2>

<input
id="adminEmail"
type="email"
placeholder="Admin Email">

<input
id="adminPassword"
type="password"
placeholder="Admin Password">

<button
id="adminLoginBtn">
Login
</button>

<button
class="secondary"
id="adminBackBtn">
Back
</button>

</div>





<div
id="adminPanel"
class="hidden">

<div class="card">

<h2>Admin Dashboard</h2>

</div>

<div class="grid">

<div class="card">

<h3>Total Users</h3>

<div
id="adminUsers"
class="stat">
0
</div>

</div>

<div class="card">

<h3>Total Websites</h3>

<div
id="adminSites"
class="stat">
0
</div>

</div>

<div class="card">

<h3>Premium Users</h3>

<div
id="adminPremium"
class="stat">
0
</div>

</div>

</div>





<div class="card">

<h3>Announcements</h3>

<textarea
id="announcementText"
placeholder="Write announcement...">

</textarea>

<button
id="publishAnnouncementBtn">

Publish Announcement

</button>

</div>





<div class="card">

<h3>Template Manager</h3>

<input
id="templateName"
placeholder="Template Name">

<select
id="templateCategory">

<option>School</option>
<option>Shop</option>
<option>Restaurant</option>
<option>Artist</option>
<option>Portfolio</option>
<option>Clinic</option>
<option>Event</option>

</select>

<button
id="addTemplateBtn">

Add Template

</button>

</div>





<div class="card">

<button
class="secondary"
id="adminDashboardBackBtn">

Back

</button>

</div>

</div>

</div>

</section>





<!-- PUBLIC WEBSITE VIEWER -->

<section
id="publicScreen"
class="screen">

<div class="container">

<div class="card">

<h2>Published Website</h2>

<button
class="secondary"
id="publicBackBtn">

Back

</button>

</div>

<div
id="publicArea"
class="editor">

Loading Website...

</div>

</div>

</section>





<!-- LOADING MODAL -->

<div
id="loadingModal"
class="hidden"
style="
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.6);
display:flex;
align-items:center;
justify-content:center;
z-index:9999;
">

<div class="card">

<h2>
Loading...
</h2>

<p>
Please wait.
</p>

</div>

</div>





<!-- FIREBASE -->

<script type="module">

import {
initializeApp
}
from
"https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import {
getAnalytics
}
from
"https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
sendPasswordResetEmail,
signOut,
onAuthStateChanged
}
from
"https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

import {
getFirestore,
collection,
addDoc,
getDocs,
doc,
getDoc,
setDoc,
updateDoc,
deleteDoc,
query,
where
}
from
"https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

import {
getStorage,
ref,
uploadBytes,
getDownloadURL
}
from
"https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";



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

const app =
initializeApp(firebaseConfig);

const analytics =
getAnalytics(app);

const auth =
getAuth(app);

const db =
getFirestore(app);

const storage =
getStorage(app);



let currentUser = null;
let currentWebsiteId = null;

let currentPlan = "FREE";

let uploadedLogo = "";
let uploadedImages = [];

let selectedTemplate = "";

const ADMIN_EMAIL =
"srikrishnab83@gmail.com";

const ADMIN_PASSWORD =
"admin123";
//
// ---------- HELPER FUNCTIONS ----------
//

function showLoading(){
  loadingModal.classList.remove("hidden");
}

function hideLoading(){
  loadingModal.classList.add("hidden");
}

function hideAllScreens(){

  document
    .querySelectorAll(".screen")
    .forEach(s=>s.classList.remove("active"));

}

function openScreen(id){

  hideAllScreens();

  document
    .getElementById(id)
    .classList.add("active");

}

function showMessage(msg){
  alert(msg);
}



//
// ---------- THEME SWITCHER ----------
//

function setTheme(theme){

  document.body.className = "";

  document.body.classList.add(theme);

  localStorage.setItem(
    "saathiTheme",
    theme
  );

}

let savedTheme =
localStorage.getItem(
  "saathiTheme"
);

if(savedTheme){

  setTheme(savedTheme);

}

themeBlue.onclick =
()=>setTheme(
  "theme-blue"
);

themeDark.onclick =
()=>setTheme(
  "theme-dark"
);

themeGreen.onclick =
()=>setTheme(
  "theme-green"
);

themePurple.onclick =
()=>setTheme(
  "theme-purple"
);



//
// ---------- AUTHENTICATION ----------
//

registerBtn.onclick =
async()=>{

  const email =
  document
    .getElementById("email")
    .value
    .trim();

  const password =
  document
    .getElementById("password")
    .value
    .trim();

  if(!email || !password){

    showMessage(
      "Enter email and password."
    );

    return;
  }

  try{

    showLoading();

    const result =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(
      doc(
        db,
        "users",
        result.user.uid
      ),
      {

        email:email,
        plan:"FREE",
        websites:0,
        created:new Date()

      }
    );

    hideLoading();

    showMessage(
      "Account created successfully."
    );

  }
  catch(e){

    hideLoading();

    showMessage(
      e.message
    );

  }

};




loginBtn.onclick =
async()=>{

  const email =
  document
    .getElementById("email")
    .value
    .trim();

  const password =
  document
    .getElementById("password")
    .value
    .trim();

  if(!email || !password){

    showMessage(
      "Enter email and password."
    );

    return;
  }

  try{

    showLoading();

    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  }
  catch(e){

    hideLoading();

    showMessage(
      e.message
    );

  }

};




forgotBtn.onclick =
async()=>{

  const email =
  document
    .getElementById("email")
    .value
    .trim();

  if(!email){

    showMessage(
      "Enter your email first."
    );

    return;
  }

  try{

    await sendPasswordResetEmail(
      auth,
      email
    );

    showMessage(
      "Password reset email sent."
    );

  }
  catch(e){

    showMessage(
      e.message
    );

  }

};




logoutBtn.onclick =
async()=>{

  await signOut(auth);

};




//
// ---------- AUTH STATE ----------
//

onAuthStateChanged(
auth,
async(user)=>{

  hideLoading();

  if(user){

    currentUser = user;

    topUser.innerText =
    user.email;

    userEmail.innerText =
    user.email;

    await loadUserData();

    await loadMyWebsites();

    openScreen(
      "appScreen"
    );

  }
  else{

    currentUser = null;

    topUser.innerText =
    "Guest";

    openScreen(
      "loginScreen"
    );

  }

});



//
// ---------- USER DATA ----------
//

async function loadUserData(){

  if(!currentUser)
  return;

  try{

    const snap =
    await getDoc(
      doc(
        db,
        "users",
        currentUser.uid
      )
    );

    if(snap.exists()){

      const data =
      snap.data();

      currentPlan =
      data.plan ||
      "FREE";

      userPlan.innerText =
      currentPlan;

      totalSites.innerText =
      data.websites || 0;

    }

  }
  catch(e){

    console.log(e);

  }

}



//
// ---------- NAVIGATION ----------
//

marketBtn.onclick =
()=>{

  openScreen(
    "templateScreen"
  );

};

backDashboardBtn.onclick =
()=>{

  openScreen(
    "appScreen"
  );

};

subscriptionBtn.onclick =
()=>{

  openScreen(
    "subscriptionScreen"
  );

};

backPlansBtn.onclick =
()=>{

  openScreen(
    "appScreen"
  );

};

analyticsBtn.onclick =
()=>{

  openScreen(
    "analyticsScreen"
  );

  loadAnalytics();

};

backAnalyticsBtn.onclick =
()=>{

  openScreen(
    "appScreen"
  );

};

adminBtn.onclick =
()=>{

  openScreen(
    "adminScreen"
  );

};

adminBackBtn.onclick =
()=>{

  openScreen(
    "appScreen"
  );

};

adminDashboardBackBtn.onclick =
()=>{

  openScreen(
    "appScreen"
  );

};

publicBackBtn.onclick =
()=>{

  openScreen(
    "appScreen"
  );

};

backBtn.onclick =
()=>{

  openScreen(
    "appScreen"
  );

};



//
// ---------- ADMIN LOGIN ----------
//

adminLoginBtn.onclick =
async()=>{

  const email =
  adminEmail.value.trim();

  const password =
  adminPassword.value.trim();

  if(
    email === ADMIN_EMAIL &&
    password === ADMIN_PASSWORD
  ){

    adminPanel
      .classList
      .remove("hidden");

    await loadAdminDashboard();

  }
  else{

    showMessage(
      "Invalid admin credentials."
    );

  }

};



//
// ---------- SUBSCRIPTION BUTTONS ----------
//

buyProBtn.onclick =
()=>{

  showMessage(
`Pay ₹99 to:

9148014768@mbk

After payment, send screenshot to admin for activation.`
  );

};

buyBusinessBtn.onclick =
()=>{

  showMessage(
`Pay ₹199 to:

9148014768@mbk

After payment, send screenshot to admin for activation.`
  );

};
//
// ---------- DEFAULT TEMPLATES ----------
//

const templates = [

{
  icon:"🏫",
  name:"School Website",
  category:"School",
  premium:false,
  html:`

<div class="block">
<h1>School Name</h1>
<p>Welcome to our school website.</p>
</div>

<div class="block">
<h2>About Us</h2>
<p>Add school information here.</p>
</div>

<div class="block">
<h2>Admissions</h2>
<p>Add admission details.</p>
</div>

`
},

{
  icon:"🛒",
  name:"Shop Website",
  category:"Shop",
  premium:false,
  html:`

<div class="block">
<h1>Shop Name</h1>
<p>Welcome to our store.</p>
</div>

<div class="block">
<h2>Products</h2>
<p>Add products here.</p>
</div>

`
},

{
  icon:"🍽️",
  name:"Restaurant",
  category:"Restaurant",
  premium:true,
  html:`

<div class="block">
<h1>Restaurant Name</h1>
<p>Welcome to our restaurant.</p>
</div>

<div class="block">
<h2>Menu</h2>
<p>Add menu items here.</p>
</div>

`
},

{
  icon:"🎨",
  name:"Artist Portfolio",
  category:"Artist",
  premium:true,
  html:`

<div class="block">
<h1>Artist Name</h1>
<p>Welcome to my portfolio.</p>
</div>

<div class="block">
<h2>Gallery</h2>
<p>Add artwork here.</p>
</div>

`
}

];



//
// ---------- TEMPLATE MARKETPLACE ----------
//

function loadTemplates(){

  templateGrid.innerHTML = "";

  templates.forEach(t=>{

    const card =
    document.createElement("div");

    card.className =
    "template-card";

    card.innerHTML = `

      <div class="template-icon">
      ${t.icon}
      </div>

      <h3>${t.name}</h3>

      <p>${t.category}</p>

      ${
        t.premium
        ?
        '<span class="badge">PRO</span>'
        :
        '<span class="badge">FREE</span>'
      }

      <br><br>

      <button>
      Use Template
      </button>

    `;

    card
      .querySelector("button")
      .onclick = ()=>{

      if(
        t.premium &&
        currentPlan === "FREE"
      ){

        showMessage(
          "Upgrade to PRO to use this template."
        );

        return;
      }

      selectedTemplate =
      t.html;

      editorArea.innerHTML =
      selectedTemplate;

      openScreen(
        "editorScreen"
      );

    };

    templateGrid.appendChild(
      card
    );

  });

}

loadTemplates();



//
// ---------- CREATE WEBSITE ----------
//

createWebsiteBtn.onclick =
()=>{

  currentWebsiteId = null;

  siteTitle.value = "";
  siteCategory.value = "";

  uploadedLogo = "";
  uploadedImages = [];

  editorArea.innerHTML = `

  <div class="block">
  <h2>Header Section</h2>
  <p>Edit your website content.</p>
  </div>

  <div class="block">
  <h2>Content Section</h2>
  <p>Add information here.</p>
  </div>

  `;

  openScreen(
    "editorScreen"
  );

};



//
// ---------- SIMPLE BLOCK BUILDER ----------
//

function addTextBlock(){

  const block =
  document.createElement("div");

  block.className =
  "block";

  block.contentEditable =
  true;

  block.innerHTML =
  "<h2>New Section</h2><p>Edit text...</p>";

  editorArea.appendChild(
    block
  );

}

function addImageBlock(){

  const block =
  document.createElement("div");

  block.className =
  "block";

  block.innerHTML = `

  <h2>Image Section</h2>
  <p>Add uploaded image here.</p>

  `;

  editorArea.appendChild(
    block
  );

}



//
// ---------- DRAG STYLE BUILDER ----------
//

editorArea.ondblclick =
()=>{

  addTextBlock();

};



//
// ---------- SAVE WEBSITE ----------
//

saveWebsiteBtn.onclick =
async()=>{

  if(!currentUser){

    showMessage(
      "Please login."
    );

    return;
  }

  const title =
  siteTitle.value.trim();

  const category =
  siteCategory.value;

  if(!title){

    showMessage(
      "Enter website name."
    );

    return;
  }

  try{

    showLoading();

    const websiteData = {

      owner:
      currentUser.uid,

      title:
      title,

      category:
      category,

      html:
      editorArea.innerHTML,

      logo:
      uploadedLogo,

      gallery:
      uploadedImages,

      published:
      false,

      views:
      0,

      created:
      new Date()

    };

    if(currentWebsiteId){

      await updateDoc(

        doc(
          db,
          "websites",
          currentWebsiteId
        ),

        websiteData

      );

    }
    else{

      const ref =
      await addDoc(

        collection(
          db,
          "websites"
        ),

        websiteData

      );

      currentWebsiteId =
      ref.id;

      const userRef =
      doc(
        db,
        "users",
        currentUser.uid
      );

      const userSnap =
      await getDoc(
        userRef
      );

      if(userSnap.exists()){

        const total =
        (
          userSnap.data().websites
          || 0
        ) + 1;

        await updateDoc(
          userRef,
          {
            websites:
            total
          }
        );

      }

    }

    hideLoading();

    await loadUserData();
    await loadMyWebsites();

    showMessage(
      "Website saved successfully."
    );

    openScreen(
      "appScreen"
    );

  }
  catch(e){

    hideLoading();

    showMessage(
      e.message
    );

  }

};



//
// ---------- LOAD USER WEBSITES ----------
//

async function loadMyWebsites(){

  websiteList.innerHTML = "";

  if(!currentUser)
  return;

  const q =
  query(

    collection(
      db,
      "websites"
    ),

    where(
      "owner",
      "==",
      currentUser.uid
    )

  );

  const snap =
  await getDocs(q);

  snap.forEach(d=>{

    const w =
    d.data();

    const card =
    document.createElement("div");

    card.className =
    "site-card";

    card.innerHTML = `

      <h3>
      ${w.title}
      </h3>

      <p>
      ${w.category || "-"}
      </p>

      <p>
      Views:
      ${w.views || 0}
      </p>

      <p>
      ${
        w.published
        ?
        "🌐 Published"
        :
        "📝 Draft"
      }
      </p>

      <br>

      <button class="editBtn">
      Edit
      </button>

      <button class="viewBtn">
      View
      </button>

      <button class="deleteBtn danger">
      Delete
      </button>

    `;

    //
    // edit
    //

    card
      .querySelector(
        ".editBtn"
      )
      .onclick =
      ()=>{

        currentWebsiteId =
        d.id;

        siteTitle.value =
        w.title || "";

        siteCategory.value =
        w.category || "";

        uploadedLogo =
        w.logo || "";

        uploadedImages =
        w.gallery || [];

        editorArea.innerHTML =
        w.html || "";

        openScreen(
          "editorScreen"
        );

      };

    //
    // view
    //

    card
      .querySelector(
        ".viewBtn"
      )
      .onclick =
      ()=>{

        publicArea.innerHTML =
        w.html || "";

        openScreen(
          "publicScreen"
        );

      };

    //
    // delete
    //

    card
      .querySelector(
        ".deleteBtn"
      )
      .onclick =
      async()=>{

        if(
          !confirm(
            "Delete this website?"
          )
        ) return;

        await deleteDoc(
          doc(
            db,
            "websites",
            d.id
          )
        );

        await loadMyWebsites();

        showMessage(
          "Website deleted."
        );

      };

    websiteList.appendChild(
      card
    );

  });

}
//
// ---------- LOGO UPLOAD ----------
//

uploadLogoBtn.onclick =
async()=>{

  if(!logoInput.files.length){

    showMessage(
      "Please choose a logo."
    );

    return;

  }

  try{

    showLoading();

    const file =
    logoInput.files[0];

    const fileRef =
    ref(
      storage,
      "logos/" +
      Date.now() +
      "_" +
      file.name
    );

    await uploadBytes(
      fileRef,
      file
    );

    uploadedLogo =
    await getDownloadURL(
      fileRef
    );

    hideLoading();

    showMessage(
      "Logo uploaded successfully."
    );

  }
  catch(e){

    hideLoading();

    showMessage(
      e.message
    );

  }

};





//
// ---------- GALLERY UPLOAD ----------
//

uploadGalleryBtn.onclick =
async()=>{

  if(!galleryInput.files.length){

    showMessage(
      "Please choose images."
    );

    return;

  }

  try{

    showLoading();

    uploadedImages = [];

    for(
      let i=0;
      i<galleryInput.files.length;
      i++
    ){

      const file =
      galleryInput.files[i];

      const fileRef =
      ref(
        storage,
        "gallery/" +
        Date.now() +
        "_" +
        file.name
      );

      await uploadBytes(
        fileRef,
        file
      );

      const url =
      await getDownloadURL(
        fileRef
      );

      uploadedImages.push(
        url
      );

    }

    hideLoading();

    showMessage(
      uploadedImages.length +
      " images uploaded."
    );

  }
  catch(e){

    hideLoading();

    showMessage(
      e.message
    );

  }

};





//
// ---------- PUBLISH WEBSITE ----------
//

publishBtn.onclick =
async()=>{

  if(!currentWebsiteId){

    showMessage(
      "Save the website first."
    );

    return;

  }

  try{

    await updateDoc(

      doc(
        db,
        "websites",
        currentWebsiteId
      ),

      {

        published:true

      }

    );

    showMessage(
      "Website published successfully."
    );

    await loadMyWebsites();

  }
  catch(e){

    showMessage(
      e.message
    );

  }

};





//
// ---------- DOWNLOAD HTML ----------
//

downloadBtn.onclick =
()=>{

  const title =
  siteTitle.value.trim() ||
  "MyWebsite";

  let galleryHtml = "";

  uploadedImages.forEach(url=>{

    galleryHtml +=

    `
    <img
    src="${url}"
    style="
      max-width:250px;
      margin:10px;
      border-radius:10px;
    ">
    `;

  });

  const html =

`
<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">

<meta
name="viewport"
content="width=device-width,initial-scale=1.0">

<title>${title}</title>

<style>

body{
font-family:Arial;
margin:0;
padding:20px;
background:#f1f5f9;
}

.container{
max-width:1100px;
margin:auto;
}

.card{
background:white;
padding:25px;
border-radius:15px;
box-shadow:0 5px 20px rgba(0,0,0,.1);
}

img{
max-width:100%;
}

</style>

</head>

<body>

<div class="container">

<div class="card">

${
uploadedLogo
?
`<img
src="${uploadedLogo}"
style="
max-width:200px;
margin-bottom:20px;
">`
:
""
}

${editorArea.innerHTML}

<hr>

<h2>
Gallery
</h2>

${galleryHtml}

</div>

</div>

</body>

</html>
`;

  const blob =
  new Blob(
    [html],
    {
      type:
      "text/html"
    }
  );

  const url =
  URL.createObjectURL(
    blob
  );

  const a =
  document.createElement(
    "a"
  );

  a.href = url;

  a.download =
  title
  .replaceAll(
    " ",
    "-"
  )
  +
  ".html";

  a.click();

  URL.revokeObjectURL(
    url
  );

};





//
// ---------- PUBLIC VIEWER ----------
//

async function openPublicWebsite(
id
){

  try{

    const snap =
    await getDoc(

      doc(
        db,
        "websites",
        id
      )

    );

    if(!snap.exists()){

      publicArea.innerHTML =
      "Website not found.";

      openScreen(
        "publicScreen"
      );

      return;

    }

    const data =
    snap.data();

    if(
      !data.published
    ){

      publicArea.innerHTML =
      "Website not published.";

      openScreen(
        "publicScreen"
      );

      return;

    }

    let logoHtml = "";

    if(data.logo){

      logoHtml =

      `
      <img
      src="${data.logo}"
      style="
        max-width:200px;
        margin-bottom:20px;
      ">
      `;

    }

    let galleryHtml = "";

    if(
      Array.isArray(
        data.gallery
      )
    ){

      data.gallery.forEach(url=>{

        galleryHtml +=

        `
        <img
        src="${url}"
        style="
          max-width:250px;
          margin:10px;
          border-radius:10px;
        ">
        `;

      });

    }

    publicArea.innerHTML =

    `
    ${logoHtml}

    ${data.html}

    <hr>

    <h2>
    Gallery
    </h2>

    ${galleryHtml}

    <br>

    <button id="shareSiteBtn">

    Share Website

    </button>
    `;

    //
    // increase view count
    //

    await updateDoc(

      doc(
        db,
        "websites",
        id
      ),

      {

        views:
        (
          data.views || 0
        ) + 1

      }

    );

    //
    // share
    //

    const shareBtn =
    document.getElementById(
      "shareSiteBtn"
    );

    if(shareBtn){

      shareBtn.onclick =
      async()=>{

        const text =
        "Check out my website: "
        +
        data.title;

        if(
          navigator.share
        ){

          try{

            await navigator.share({

              title:
              data.title,

              text:
              text

            });

          }
          catch(e){

            console.log(
              e
            );

          }

        }
        else{

          navigator.clipboard
          .writeText(
            text
          );

          showMessage(
            "Copied to clipboard."
          );

        }

      };

    }

    openScreen(
      "publicScreen"
    );

  }
  catch(e){

    showMessage(
      e.message
    );

  }

}
//
// ---------- ANALYTICS DASHBOARD ----------
//

async function loadAnalytics(){

  if(!currentUser)
  return;

  try{

    const q =
    query(
      collection(db,"websites"),
      where(
        "owner",
        "==",
        currentUser.uid
      )
    );

    const snap =
    await getDocs(q);

    let totalSites = 0;
    let totalViews = 0;
    let totalPublished = 0;

    snap.forEach(d=>{

      const w =
      d.data();

      totalSites++;

      totalViews +=
      w.views || 0;

      if(w.published){

        totalPublished++;

      }

    });

    analyticsSites.innerText =
    totalSites;

    analyticsViews.innerText =
    totalViews;

    analyticsPublished.innerText =
    totalPublished;

    analyticsWhatsapp.innerText =
    0;

  }
  catch(e){

    console.log(e);

  }

}



//
// ---------- ADMIN DASHBOARD ----------
//

async function loadAdminDashboard(){

  try{

    //
    // total users
    //

    const users =
    await getDocs(
      collection(
        db,
        "users"
      )
    );

    //
    // total websites
    //

    const sites =
    await getDocs(
      collection(
        db,
        "websites"
      )
    );

    let premium = 0;

    users.forEach(d=>{

      const u =
      d.data();

      if(
        u.plan === "PRO" ||
        u.plan === "BUSINESS"
      ){

        premium++;

      }

    });

    adminUsers.innerText =
    users.size;

    adminSites.innerText =
    sites.size;

    adminPremium.innerText =
    premium;

  }
  catch(e){

    console.log(e);

  }

}



//
// ---------- ANNOUNCEMENTS ----------
//

publishAnnouncementBtn.onclick =
async()=>{

  const text =
  announcementText.value
  .trim();

  if(!text){

    showMessage(
      "Write an announcement."
    );

    return;

  }

  try{

    await addDoc(

      collection(
        db,
        "announcements"
      ),

      {

        text:
        text,

        created:
        new Date()

      }

    );

    announcementText.value =
    "";

    showMessage(
      "Announcement published."
    );

  }
  catch(e){

    showMessage(
      e.message
    );

  }

};



//
// ---------- TEMPLATE MANAGER ----------
//

addTemplateBtn.onclick =
async()=>{

  const name =
  templateName.value.trim();

  const category =
  templateCategory.value;

  if(!name){

    showMessage(
      "Enter template name."
    );

    return;

  }

  try{

    await addDoc(

      collection(
        db,
        "templates"
      ),

      {

        name:
        name,

        category:
        category,

        premium:
        true,

        icon:
        "🌐",

        html:

        `
        <div class="block">
        <h1>${name}</h1>
        <p>
        New premium template.
        </p>
        </div>
        `,

        created:
        new Date()

      }

    );

    templateName.value =
    "";

    showMessage(
      "Template added."
    );

  }
  catch(e){

    showMessage(
      e.message
    );

  }

};



//
// ---------- LOAD CUSTOM TEMPLATES ----------
//

async function loadCustomTemplates(){

  try{

    const snap =
    await getDocs(
      collection(
        db,
        "templates"
      )
    );

    snap.forEach(d=>{

      const t =
      d.data();

      templates.push({

        icon:
        t.icon || "🌐",

        name:
        t.name,

        category:
        t.category,

        premium:
        t.premium,

        html:
        t.html

      });

    });

    loadTemplates();

  }
  catch(e){

    console.log(e);

  }

}

loadCustomTemplates();



//
// ---------- INITIAL APP SETUP ----------
//

window.addEventListener(
"load",
()=>{

  hideLoading();

  loadTemplates();

});



//
// ---------- ADS FOR FREE USERS ----------
//

function showFreeAd(){

  if(
    currentPlan !==
    "FREE"
  ){

    return;

  }

  const ad =
  document.createElement(
    "div"
  );

  ad.className =
  "card";

  ad.innerHTML =

  `
  <h3>
  Saathi Website Builder
  </h3>

  <p>
  Upgrade to PRO to remove ads.
  </p>
  `;

  document
    .querySelector(
      "#appScreen .container"
    )
    .appendChild(
      ad
    );

}

setTimeout(
showFreeAd,
3000
);


//
// ---------- SECURITY NOTE ----------
//

console.log(
"Saathi Website Builder Started"
);

</script>

</body>
</html>
