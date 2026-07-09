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
