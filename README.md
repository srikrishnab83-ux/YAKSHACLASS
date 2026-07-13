<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VidToolkit Pro - All-in-One Creator Tools</title>
  <meta name="description" content="VidToolkit Pro is an all-in-one creator tools platform for YouTube, Instagram, Facebook, and TikTok users.">
  <meta name="keywords" content="creator tools, youtube tools, instagram tools, social media tools">
  <meta name="author" content="VidToolkit Pro">

  <!-- Google Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- Font Awesome -->
  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

  <style>
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family:'Poppins',sans-serif;
    }
    html{
  scroll-behavior:smooth;
}

    body{
      background:#0f172a;
      color:#ffffff;
      line-height:1.6;
    }

    a{
      text-decoration:none;
      color:inherit;
    }

    .container{
      width:90%;
      max-width:1200px;
      margin:auto;
    }

    /* Navbar */
    header{
      position:sticky;
      top:0;
      z-index:1000;
      background:rgba(15,23,42,0.9);
      backdrop-filter:blur(15px);
      border-bottom:1px solid rgba(255,255,255,0.08);
    }

    nav{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:18px 0;
    }

    .logo{
      font-size:28px;
      font-weight:700;
      background:linear-gradient(90deg,#7c3aed,#3b82f6);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }

    .nav-links{
      display:flex;
      gap:30px;
    }

    .nav-links a{
      transition:0.3s;
    }

    .nav-links a:hover{
      color:#60a5fa;
    }

    .theme-btn{
      background:#1e293b;
      border:none;
      color:#fff;
      width:42px;
      height:42px;
      border-radius:50%;
      cursor:pointer;
      font-size:18px;
    }

    /* Hero Section */
    .hero{
      padding:100px 0;
      text-align:center;
    }

    .hero h1{
      font-size:55px;
      line-height:1.2;
      margin-bottom:20px;
    }

    .gradient{
      background:linear-gradient(90deg,#7c3aed,#3b82f6);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }

    .hero p{
      max-width:700px;
      margin:auto;
      color:#cbd5e1;
      font-size:18px;
    }

    .search-box{
      margin-top:40px;
      display:flex;
      justify-content:center;
      gap:15px;
      flex-wrap:wrap;
    }

    .search-box input{
      width:500px;
      max-width:100%;
      padding:18px;
      border:none;
      border-radius:14px;
      background:#1e293b;
      color:#fff;
      font-size:16px;
    }

    .btn{
  padding:18px 30px;
  border:none;
  border-radius:14px;
  background:linear-gradient(90deg,#7c3aed,#3b82f6);
  color:#fff;
  cursor:pointer;
  font-size:16px;
  font-weight:600;
  transition:all 0.3s ease;
}

.btn:hover{
  transform:translateY(-3px);
  box-shadow:0 10px 25px rgba(59,130,246,0.4);
}

.btn:active{
  transform:scale(0.96);
}
.menu-btn{
  display:none;
  background:none;
  border:none;
  color:#fff;
  font-size:24px;
  cursor:pointer;
}
    .tools-bar{
  position:sticky;
  top:75px;
  z-index:999;
  display:flex;
  justify-content:center;
  gap:12px;
  padding:15px;
  background:rgba(15,23,42,0.9);
  backdrop-filter:blur(15px);
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.tool-btn{
  border:none;
  padding:12px 18px;
  border-radius:30px;
  background:#1e293b;
  color:#fff;
  cursor:pointer;
  transition:all 0.3s ease;
}

.tool-btn:hover{
  transform:translateY(-2px);
  background:#3b82f6;
}

@media(max-width:768px){

  .menu-btn{
    display:block;
  }

  .nav-links{
  display:flex;
  position:absolute;
  top:80px;
  right:20px;
  background:#1e293b;
  padding:20px;
  border-radius:20px;
  flex-direction:column;
  gap:15px;
  min-width:180px;
  opacity:0;
  visibility:hidden;
  transform:translateY(-15px);
  transition:all 0.3s ease;
}

.nav-links.active{
  opacity:1;
  visibility:visible;
  transform:translateY(0);
}
  .tools-bar{
  overflow-x:auto;
  justify-content:flex-start;
}

.tool-btn{
  white-space:nowrap;
}
}
    /* Platforms */
    .section-title{
      text-align:center;
      margin-bottom:50px;
      font-size:38px;
    }

    .platforms{
      padding:80px 0;
    }

    .cards{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
      gap:25px;
    }

    .card{
  background:#1e293b;
  padding:35px;
  border-radius:25px;
  text-align:center;
  transition:all 0.3s ease;
  border:1px solid rgba(255,255,255,0.08);
}
 .platforms{
  padding:80px 0;
  animation:fadeInUp 1s ease;
}

@keyframes fadeInUp{
  from{
    opacity:0;
    transform:translateY(50px);
  }

  to{
    opacity:1;
    transform:translateY(0);
  }
}   

.card:hover{
  transform:translateY(-10px);
  box-shadow:0 15px 40px rgba(59,130,246,0.25);
}

    .card i{
      font-size:55px;
      margin-bottom:20px;
      color:#60a5fa;
    }

    .card h3{
      margin-bottom:15px;
      font-size:24px;
    }

    .card p{
      color:#cbd5e1;
    }

    @media(max-width:768px){

      .hero h1{
        font-size:38px;
      }

    }
    #toast{
  position:fixed;
  bottom:30px;
  left:50%;
  transform:translateX(-50%);
  background:#1e293b;
  color:white;
  padding:15px 25px;
  border-radius:15px;
  box-shadow:0 10px 25px rgba(0,0,0,0.3);
  opacity:0;
  pointer-events:none;
  transition:all 0.4s ease;
  z-index:9999;
}

#toast.show{
  opacity:1;
  bottom:50px;
}
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
</head>

<body>

<header>
  <div class="tools-bar">

  <button
    class="tool-btn"
    onclick="window.scrollTo({top:0,behavior:'smooth'})">
    📷 Thumbnail
  </button>

  <button
    class="tool-btn"
    onclick="document.getElementById('qrSection').scrollIntoView()">
    🔳 QR
  </button>

  <button
    class="tool-btn"
    onclick="document.getElementById('hashtagSection').scrollIntoView()">
    #️⃣ Hashtags
  </button>

</div>
  <div class="container">
    <nav>

      <div class="logo">
        VidToolkit Pro
      </div>

      <div class="nav-links">
        <a href="#">Home</a>
        <a href="#">Tools</a>
        <a<a href="#blogSection">Blog</a> href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
<button class="menu-btn" id="menuBtn">
  <i class="fas fa-bars"></i>
</button>
      <button class="theme-btn">
        <i class="fas fa-moon"></i>
      </button>

    </nav>
  </div>
</header>

<section class="hero">
  <div class="container">

    <h1 id="typing-title">
  All-in-One Creator Tools Platform
</h1>

    <p>
      Powerful utilities for YouTube, Instagram,
      Facebook and TikTok creators.
      Analyze video links, download thumbnails,
      generate QR codes and access professional tools.
    </p>

    <div class="search-box">

  <input
    type="text"
    id="videoLink"
    placeholder="Paste YouTube URL">

  <button
    class="btn"
    id="previewBtn">
    Preview Thumbnail
  </button>

</div>

<div
  id="thumbnailContainer"
  style="margin-top:40px;">
</div>

  </div>
</section>
<section style="padding:30px 0;">
  <div class="container">

    <div class="search-box">

      <button
        class="btn"
        onclick="window.scrollTo({top:0,behavior:'smooth'})">
        Thumbnail
      </button>

      <button
        class="btn"
        onclick="document.getElementById('qrSection').scrollIntoView()">
        QR Generator
      </button>

      <button
        class="btn"
        onclick="document.getElementById('hashtagSection').scrollIntoView()">
        Hashtag Generator
      </button>

    </div>

  </div>
</section>
<section class="platforms">
  <div class="container">

    <h2 class="section-title">
      Supported Platforms
    </h2>

    <div class="cards">

      <div class="card">
        <i class="fab fa-youtube"></i>
        <h3>YouTube Tools</h3>
        <p>
          Thumbnail downloader, metadata viewer,
          QR generator and creator utilities.
        </p>
      </div>

      <div class="card">
        <i class="fab fa-instagram"></i>
        <h3>Instagram Tools</h3>
        <p>
          Profile viewer, hashtag generator
          and content creation tools.
        </p>
      </div>

      <div class="card">
        <i class="fab fa-facebook"></i>
        <h3>Facebook Tools</h3>
        <p>
          Video information tools,
          sharing utilities and analytics.
        </p>
      </div>

      <div class="card">
        <i class="fab fa-tiktok"></i>
        <h3>TikTok Tools</h3>
        <p>
          Creator utilities, QR generator
          and social media helper tools.
        </p>
      </div>

    </div>

  </div>
</section>
<!-- Popular Tools -->
<section class="platforms">
  <div class="container">

    <h2 class="section-title">
      Popular Creator Tools
    </h2>

    <div class="cards">

      <div class="card">
        <i class="fas fa-image"></i>
        <h3>Thumbnail Downloader</h3>
        <p>Preview and download public video thumbnails.</p>
      </div>

     <div class="card" onclick="scrollToMetadata()">
  <i class="fas fa-chart-line"></i>
  <h3>Metadata Viewer</h3>
  <p>View title, description and other public information.</p>
</div>

      <div class="card" id="qrCard">
  <i class="fas fa-qrcode"></i>
  <h3>QR Generator</h3>
  <p>Create QR codes for your links and profiles.</p>
</div>

      <div class="card" id="hashtagCard">
  <i class="fas fa-hashtag"></i>
  <h3>Hashtag Generator</h3>
  <p>Generate hashtags for social media content.</p>
</div>

    <div class="card" id="linkCard">
  <i class="fas fa-link"></i>
  <h3>Link Shortener</h3>
  <p>Create shorter links for easy sharing.</p>
</div>

      <div class="card" id="embedCard">
  <i class="fas fa-code"></i>
  <h3>Embed Generator</h3>
  <p>Generate embed codes for websites and blogs.</p>
</div>

    </div>

  </div>
</section>

<!-- AdSense Placeholder -->
<section style="padding:60px 0;">
  <div class="container">

    <div class="card">
      <h3>Advertisement Space</h3>
      <p>
        Google AdSense banner will appear here after approval.
      </p>
    </div>

  </div>
</section>

<!-- Features -->
<section class="platforms">
  <div class="container">

    <h2 class="section-title">
      Why Choose VidToolkit Pro?
    </h2>

    <div class="cards">

      <div class="card">
        <i class="fas fa-bolt"></i>
        <h3>Fast</h3>
        <p>Optimized for speed and performance.</p>
      </div>

      <div class="card">
        <i class="fas fa-mobile-alt"></i>
        <h3>Responsive</h3>
        <p>Works perfectly on mobile, tablet and desktop.</p>
      </div>

      <div class="card">
        <i class="fas fa-shield-alt"></i>
        <h3>Secure</h3>
        <p>Simple and privacy-focused experience.</p>
      </div>

      <div class="card">
        <i class="fas fa-rocket"></i>
        <h3>SEO Friendly</h3>
        <p>Built to attract search traffic and ad revenue.</p>
      </div>

    </div>

  </div>
</section>

<!-- Blog Preview -->
<section class="platforms">
  <div class="container">

    <h2 class="section-title">
      Latest Articles
    </h2>

    <div class="cards">

      <div class="card">
        <h3>Best Creator Tools for YouTube</h3>
        <p>
          Discover useful tools that can improve your workflow.
        </p>
      </div>

      <div class="card">
        <h3>Instagram Growth Tips</h3>
        <p>
          Learn strategies to improve reach and engagement.
        </p>
      </div>

      <div class="card">
        <h3>Facebook Content Guide</h3>
        <p>
          Practical tips for creating engaging social content.
        </p>
      </div>

    </div>

  </div>
</section>

<!-- FAQ -->
<section class="platforms">
  <div class="container">

    <h2 class="section-title">
      Frequently Asked Questions
    </h2>

    <div class="cards">

      <div class="card">
        <h3>Is VidToolkit Pro free?</h3>
        <p>Yes. Most creator tools are available for free.</p>
      </div>

      <div class="card">
        <h3>Can I use it on mobile?</h3>
        <p>Yes. The website is fully mobile responsive.</p>
      </div>

      <div class="card">
        <h3>Will more tools be added?</h3>
        <p>Yes. New creator utilities will be released regularly.</p>
      </div>

    </div>

  </div>
</section>
<section class="platforms" id="blogSection">
  <div class="container">

    <h2 class="section-title">
      Creator Blog
    </h2>

    <div class="cards">

      <div class="card">
        <h3>
          Best Free YouTube Tools for Creators
        </h3>

        <p>
          Discover useful creator tools like
          thumbnail downloaders, QR generators,
          metadata viewers and embed generators.
        </p>

        <button
          class="btn"
          onclick="openBlog(1)">
          Read More
        </button>
      </div>

      <div class="card">
        <h3>
          How to Download YouTube Thumbnails
        </h3>

        <p>
          Learn how to find and download
          high-quality YouTube thumbnails easily.
        </p>

        <button
          class="btn"
          onclick="openBlog(2)">
          Read More
        </button>
      </div>

      <div class="card">
        <h3>
          Instagram Growth Tips
        </h3>

        <p>
          Practical tips to grow your
          Instagram account and increase reach.
        </p>

        <button
          class="btn"
          onclick="openBlog(3)">
          Read More
        </button>
      </div>

    </div>

  </div>
</section>
<!-- Contact -->
<section style="padding:80px 0;">
  <div class="container">

    <h2 class="section-title">
      Contact Us
    </h2>

    <div class="card">

      <h3>Get in Touch</h3>
      <p>Email: support@vidtoolkitpro.com</p>
      <p>Website: www.vidtoolkitpro.com</p>

    </div>

  </div>
</section>
<!-- Statistics -->
<section class="platforms">
  <div class="container">

    <h2 class="section-title">
      Trusted by Creators Worldwide
    </h2>

    <div class="cards">

      <div class="card">
        <i class="fas fa-users"></i>
        <h3 id="users">0</h3>
        <p>Creators Using Our Tools</p>
      </div>

      <div class="card">
        <i class="fas fa-tools"></i>
        <h3 id="tools">0</h3>
        <p>Professional Tools</p>
      </div>

      <div class="card">
        <i class="fas fa-globe"></i>
        <h3 id="visits">0</h3>
        <p>Monthly Visits</p>
      </div>

    </div>

  </div>
</section>

<!-- Back To Top Button -->
<button id="topBtn">
  <i class="fas fa-arrow-up"></i>
</button>

<style>
#topBtn{
  position:fixed;
  bottom:30px;
  right:30px;
  width:55px;
  height:55px;
  border:none;
  border-radius:50%;
  background:linear-gradient(90deg,#7c3aed,#3b82f6);
  color:white;
  font-size:20px;
  cursor:pointer;
  display:none;
  z-index:999;
}
</style>

<script>
// Counter Animation
function animateValue(id, start, end, duration){
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let step = Math.abs(Math.floor(duration / range));

  let timer = setInterval(function () {
    current += increment;
    document.getElementById(id).innerHTML =
      current.toLocaleString() + "+";

    if (current == end) {
      clearInterval(timer);
    }
  }, step);
}

animateValue("users",0,15000,2000);
animateValue("tools",0,50,2000);
animateValue("visits",0,100000,2500);

// Back To Top
const topBtn = document.getElementById("topBtn");

window.onscroll = function(){
  if(document.documentElement.scrollTop > 300){
    topBtn.style.display = "block";
  }else{
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
};
</script>
<!-- Floating Background -->
<div class="bg-circle circle1"></div>
<div class="bg-circle circle2"></div>

<!-- Testimonials -->
<section class="platforms">
  <div class="container">

    <h2 class="section-title">
      What Creators Say
    </h2>

    <div class="cards">

      <div class="card testimonial">
        <h3>★★★★★</h3>
        <p>
          Amazing collection of creator tools.
          Simple and professional.
        </p>
        <strong>- YouTube Creator</strong>
      </div>

      <div class="card testimonial">
        <h3>★★★★★</h3>
        <p>
          Fast and easy to use on mobile and desktop.
        </p>
        <strong>- Instagram Creator</strong>
      </div>

      <div class="card testimonial">
        <h3>★★★★★</h3>
        <p>
          One of the best creator utility websites.
        </p>
        <strong>- Social Media Manager</strong>
      </div>

    </div>

  </div>
</section>

<!-- Newsletter -->
<section style="padding:80px 0;">
  <div class="container">

    <div class="card">

      <h2 style="margin-bottom:20px;">
        Stay Updated
      </h2>

      <p style="margin-bottom:30px;">
        Get updates whenever we release new tools.
      </p>

      <div class="search-box">

        <input
          type="email"
          placeholder="Enter your email">

        <button class="btn">
          Subscribe
        </button>

      </div>

    </div>

  </div>
</section>
<!-- QR Generator -->
<section class="platforms" id="qrSection">
  <div class="container">

    <h2 class="section-title">
      QR Code Generator
    </h2>

    <div class="card">

      <div class="search-box">

        <input
          type="text"
          id="qrText"
          placeholder="Paste any URL">

        <button
          class="btn"
          id="qrBtn">
          Generate QR
        </button>

      </div>

      <div
  id="qrContainer"
  style="margin-top:40px;">
</div>

<button
  class="btn"
  id="downloadQR"
  style="display:none; margin-top:20px;">
  Download QR
</button>

    </div>

  </div>
</section>
<!-- Hashtag Generator -->
<section class="platforms" id="hashtagSection">
  <div class="container">

    <h2 class="section-title">
      Hashtag Generator
    </h2>

    <div class="card">

      <div class="search-box">

        <input
          type="text"
          id="keywordInput"
          placeholder="Enter a keyword (Example: travel)">

        <button
          class="btn"
          id="hashtagBtn">
          Generate Hashtags
        </button>

      </div>

      <div
        id="hashtagResult"
        style="
          margin-top:40px;
          font-size:18px;
          line-height:2;
          word-break:break-word;
        ">
      </div>

    </div>

  </div>
</section>

<!-- Metadata Viewer -->
<section class="platforms" id="metadataSection">
  <div class="container">

    <h2 class="section-title">
      YouTube Metadata Viewer
    </h2>

    <div class="card">

      <div class="search-box">

        <input
          type="text"
          id="metadataLink"
          placeholder="Paste YouTube URL">

        <button
          class="btn"
          id="metadataBtn">
          Get Information
        </button>

      </div>

      <div
        id="metadataContainer"
        style="margin-top:40px;">
      </div>

    </div>

  </div>
</section>
<!-- Link Shortener -->
<section class="platforms" id="linkSection">
  <div class="container">

    <h2 class="section-title">
      Link Shortener
    </h2>

    <div class="card">

      <div class="search-box">

        <input
          type="text"
          id="longLink"
          placeholder="Paste any URL">

        <button
          class="btn"
          id="shortBtn">
          Shorten Link
        </button>

      </div>

      <div
        id="shortResult"
        style="margin-top:40px;">
      </div>

    </div>

  </div>
</section>
<!-- Embed Generator -->
<section class="platforms" id="embedSection">
  <div class="container">

    <h2 class="section-title">
      YouTube Embed Generator
    </h2>

    <div class="card">

      <div class="search-box">

        <input
          type="text"
          id="embedLink"
          placeholder="Paste YouTube URL">

        <button
          class="btn"
          id="embedBtn">
          Generate Embed
        </button>

      </div>

      <div
        id="embedResult"
        style="margin-top:40px;">
      </div>

    </div>

  </div>
</section>
<!-- Footer -->
<footer style="padding:40px 0; background:#020617;">
  <div class="container" style="text-align:center;">

    <h3 style="margin-bottom:20px;">
      VidToolkit Pro
    </h3>

    <p style="color:#cbd5e1;">
      All-in-One Creator Tools Platform
    </p>

    <p style="margin-top:20px;color:#94a3b8;">
      © 2026 VidToolkit Pro. All Rights Reserved.
    </p>

  </div>
</footer>

<script>
const themeButton =
document.querySelector(".theme-btn");

// Load saved theme
if(localStorage.getItem("theme") === "light"){
  document.body.style.background = "white";
  document.body.style.color = "#111827";
}

themeButton.addEventListener("click", function(){

  if(document.body.style.background === "white"){

    document.body.style.background = "#0f172a";
    document.body.style.color = "#ffffff";

    localStorage.setItem(
      "theme",
      "dark"
    );

  }else{

    document.body.style.background = "white";
    document.body.style.color = "#111827";

    localStorage.setItem(
      "theme",
      "light"
    );
  }

});
</script>
<style>

/* Floating Background */
.bg-circle{
  position:fixed;
  border-radius:50%;
  filter:blur(100px);
  z-index:-1;
  animation:float 10s infinite alternate;
}

.circle1{
  width:300px;
  height:300px;
  background:#7c3aed;
  top:-100px;
  left:-100px;
}

.circle2{
  width:350px;
  height:350px;
  background:#3b82f6;
  bottom:-150px;
  right:-100px;
}

@keyframes float{
  from{
    transform:translateY(0px);
  }
  to{
    transform:translateY(80px);
  }
}

.testimonial{
  min-height:250px;
}

.card{
  backdrop-filter:blur(15px);
}

</style>

<script>

// Newsletter Button
const subscribeBtn =
document.querySelectorAll(".btn");

subscribeBtn.forEach(btn => {
  if(btn.innerText === "Subscribe"){
    btn.addEventListener("click", function(){

      const email =
      this.previousElementSibling.value;

      if(email === ""){
        alert("Please enter your email.");
        return;
      }

      alert(
        "Thank you for subscribing!"
      );

      this.previousElementSibling.value =
      "";
    });
  }
});

</script>
<script>
// Typing Effect
const title = "All-in-One Creator Tools Platform";
const titleEl = document.getElementById("typing-title");

if (titleEl) {
  let i = 0;
  titleEl.innerHTML = "";

  function typeEffect() {
    if (i < title.length) {
      titleEl.innerHTML += title.charAt(i);
      i++;
      setTimeout(typeEffect, 70);
    }
  }

  typeEffect();
}

// Thumbnail Preview
window.addEventListener("load", function () {
  const previewBtn = document.getElementById("previewBtn");

  if (!previewBtn) return;

  previewBtn.addEventListener("click", function () {

    const url =
      document.getElementById("videoLink").value.trim();

    if (url === "") {
      alert("Please paste a YouTube URL.");
      return;
    }

   let id = "";

if (url.includes("watch?v=")) {
  id = url.split("watch?v=")[1].split("&")[0];
}
else if (url.includes("youtu.be/")) {
  id = url.split("youtu.be/")[1].split("?")[0];
}
else if (url.includes("/shorts/")) {
  id = url.split("/shorts/")[1].split("?")[0];
}
else if (url.includes("/live/")) {
  id = url.split("/live/")[1].split("?")[0];
}
  else if (url.includes("/shorts/")) {
  id = url.split("/shorts/")[1].split("?")[0];
}
else {
  showToast("❌ Invalid YouTube URL");
  return;
}

    const thumb =
      "https://img.youtube.com/vi/" +
      id +
      "/hqdefault.jpg";

    document.getElementById(
      "thumbnailContainer"
    ).innerHTML =
      `
      <div class="card">
        <h3>Video Thumbnail</h3>

        <img
          src="${thumb}"
          style="
            width:100%;
            max-width:700px;
            border-radius:20px;
            margin-top:20px;
          ">

        <br><br>

        <a href="${thumb}" target="_blank">
          <button class="btn">
            Open Image
          </button>
        </a>
      </div>
      `;
  });
});
</script>
<script>

window.addEventListener("load", function () {

  const qrBtn =
    document.getElementById("qrBtn");

  if (!qrBtn) return;

  qrBtn.addEventListener("click", function () {

  const text =
    document.getElementById("qrText")
    .value
    .trim();

    if (text === "") {
      showToast("⚠️ Please enter a URL.");
      return;
    }

    const container =
      document.getElementById(
        "qrContainer"
      );

    container.innerHTML = "";

    new QRCode(container, {
      text: text,
      width: 250,
      height: 250
    });

  });

});
 const downloadBtn =
  document.getElementById("downloadQR");

if (downloadBtn) {
  downloadBtn.style.display = "inline-block";
}

</script>
<script>
console.log("QRCode =", typeof QRCode);
</script>
<script>
document.addEventListener("DOMContentLoaded", function () {

  const links = [
    ["qrCard", "qrSection"],
    ["hashtagCard", "hashtagSection"]
  ];

  links.forEach(([cardId, sectionId]) => {
    const card = document.getElementById(cardId);
    const section = document.getElementById(sectionId);

    if (card && section) {
      card.style.cursor = "pointer";

      card.addEventListener("click", function () {
        section.scrollIntoView({
          behavior: "smooth"
        });
      });
    }
  });

});
</script>
<script>
const linkCard =
document.getElementById("linkCard");

const linkSection =
document.getElementById("linkSection");

if(linkCard && linkSection){

  linkCard.style.cursor = "pointer";

  linkCard.addEventListener("click", function(){

    linkSection.scrollIntoView({
      behavior: "smooth"
    });

  });
}
</script>
<script>

document.addEventListener("DOMContentLoaded", function () {

  const hashtagBtn =
    document.getElementById("hashtagBtn");

  if (!hashtagBtn) return;

  hashtagBtn.addEventListener("click", function () {

    const keyword =
      document.getElementById("keywordInput")
      .value
      .trim()
      .toLowerCase();

    if (keyword === "") {
      showToast("⚠️ Please enter a keyword.");
      return;
    }

    const tags = [
      "#" + keyword,
      "#" + keyword + "life",
      "#" + keyword + "lover",
      "#" + keyword + "gram",
      "#" + keyword + "reels",
      "#" + keyword + "video",
      "#" + keyword + "creator",
      "#" + keyword + "community"
    ];

    document.getElementById("hashtagResult")
      .innerHTML = tags.join(" ");
  });

});
</script>
<script>
document.addEventListener("DOMContentLoaded", function () {

  const shortBtn =
    document.getElementById("shortBtn");

  if (!shortBtn) return;

  shortBtn.addEventListener("click", function () {

    const url =
      document.getElementById("longLink")
      .value
      .trim();

    if (url === "") {
      alert("Please enter a URL.");
      return;
    }

    const shortLink =
      location.origin +
      "/?url=" +
      btoa(url);

    document.getElementById("shortResult")
      .innerHTML = `
        <p><strong>Short Link:</strong></p>

        <input
          id="generatedLink"
          value="${shortLink}"
          style="
            width:100%;
            padding:15px;
            margin-top:15px;
            border-radius:12px;
          "
          readonly>

        <br><br>

        <button
          class="btn"
          id="copyLinkBtn">
          Copy Link
        </button>
      `;

    const copyBtn =
      document.getElementById("copyLinkBtn");

    copyBtn.addEventListener("click", function () {

      const link =
        document.getElementById("generatedLink");

      navigator.clipboard.writeText(
        link.value
      );

      showToast("✅ Link copied!");
    });

  });

});
</script>
<script>
const menuBtn =
document.getElementById("menuBtn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", function(){
  navLinks.classList.toggle("active");
});
</script>
<script>
document.getElementById("downloadQR")
.addEventListener("click", function () {

  const canvas =
    document.querySelector("#qrContainer canvas");

  if (!canvas) {
    showToast("⚠️ Please generate a QR code first.");
    return;
  }

  const a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.download = "vidtoolkit-qr.png";
  a.click();

});
</script>
<script>
function scrollToMetadata() {
  document.getElementById("metadataSection")
    .scrollIntoView({
      behavior: "smooth"
    });
}
</script>
<script>
window.addEventListener("load", function () {

  const metadataBtn =
    document.getElementById("metadataBtn");

  if (!metadataBtn) return;

  metadataBtn.addEventListener("click", function () {

    const url =
      document.getElementById("metadataLink")
      .value.trim();

    if (url === "") {
      showToast("⚠️ Please paste a YouTube URL.");
      return;
    }

    let id = "";

    if (url.includes("youtube.com/watch?v=")) {
      id = url.split("v=")[1].split("&")[0];
    }
    else if (url.includes("youtu.be/")) {
      id = url.split("youtu.be/")[1].split("?")[0];
    }
      else if (url.includes("/live/")) {
  id = url.split("/live/")[1].split("?")[0];
}
    else {
      showToast("❌ Invalid YouTube URL");
      return;
    }

    const thumb =
      "https://img.youtube.com/vi/" +
      id +
      "/hqdefault.jpg";

    document.getElementById(
      "metadataContainer"
    ).innerHTML = `
      <div class="card">
        <h3>Video Information</h3>
        <p><strong>Video ID:</strong> ${id}</p>
        <img
          src="${thumb}"
          style="
            width:100%;
            max-width:500px;
            border-radius:20px;
            margin-top:20px;
          ">
      </div>
    `;
  });

});
</script>
<script>
document.addEventListener("DOMContentLoaded", function () {

  const embedCard =
    document.getElementById("embedCard");

  const embedSection =
    document.getElementById("embedSection");

  if (embedCard && embedSection) {

    embedCard.style.cursor = "pointer";

    embedCard.addEventListener("click", function () {
      embedSection.scrollIntoView({
        behavior: "smooth"
      });
    });

  }

});
</script>
<script>
document.addEventListener("DOMContentLoaded", function () {

  const embedBtn =
    document.getElementById("embedBtn");

  if (!embedBtn) return;

  embedBtn.addEventListener("click", function () {

    const url =
      document.getElementById("embedLink")
      .value
      .trim();

    if (url === "") {
      alert("Please paste a YouTube URL.");
      return;
    }

    let id = "";

    if (url.includes("watch?v=")) {
      id = url.split("watch?v=")[1].split("&")[0];
    }
    else if (url.includes("youtu.be/")) {
      id = url.split("youtu.be/")[1].split("?")[0];
    }
    else if (url.includes("/shorts/")) {
      id = url.split("/shorts/")[1].split("?")[0];
    }
    else {
      showToast("❌ Invalid YouTube URL");
      return;
    }

    const code =
`<iframe width="560" height="315"
src="https://www.youtube.com/embed/${id}"
frameborder="0"
allowfullscreen>
</iframe>`;

    document.getElementById("embedResult")
      .innerHTML = `
        <textarea
          id="embedCode"
          style="
            width:100%;
            height:150px;
            padding:15px;
            border-radius:15px;
            margin-top:20px;
          "
          readonly>${code}</textarea>

        <br><br>

        <button
          class="btn"
          id="copyEmbedBtn">
          Copy Embed Code
        </button>
      `;

    document.getElementById("copyEmbedBtn")
      .addEventListener("click", function () {

        const codeBox =
          document.getElementById("embedCode");

        navigator.clipboard.writeText(
          codeBox.value
        );

    showToast("✅ Embed code copied!");
      });

  });

});
</script>

 <div id="toast">Message</div>

<script>
function showToast(message) {
  const toast = document.getElementById("toast");

  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
  }, 2000);
}
</script>
<div
id="blogPopup"
style="
display:none;
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.8);
z-index:9999;
overflow:auto;
">

<div
style="
background:#1e293b;
max-width:800px;
margin:50px auto;
padding:30px;
border-radius:20px;
color:white;
">

<h2 id="blogTitle"></h2>

<p
id="blogContent"
style="margin-top:20px;">
</p>

<br>

<button
class="btn"
onclick="closeBlog()">
Close
</button>
</div>
</div>
<script>

function openBlog(id){

  const title =
  document.getElementById("blogTitle");

  const content =
  document.getElementById("blogContent");

  if(id === 1){

    title.innerText =
    "Best Free YouTube Tools for Creators";

    content.innerHTML =
    `
    Thumbnail Downloader helps creators
    download public thumbnails.

    Metadata Viewer allows checking
    public video information.

    QR Generator creates QR codes
    for channels and websites.

    Embed Generator creates
    iframe code for blogs and websites.
    `;
  }

  if(id === 2){

    title.innerText =
    "How to Download YouTube Thumbnails";

    content.innerHTML =
    `
    Step 1: Copy a YouTube link.<br><br>

    Step 2: Paste it into Thumbnail Downloader.<br><br>

    Step 3: Click Preview Thumbnail.<br><br>

    Step 4: Open or download the image.
    `;
  }

  if(id === 3){

    title.innerText =
    "Instagram Growth Tips";

    content.innerHTML =
    `
    Post consistently.<br><br>

    Use relevant hashtags.<br><br>

    Create engaging reels.<br><br>

    Reply to comments and messages.
    `;
  }

  document.getElementById(
    "blogPopup"
  ).style.display =
  "block";
}

function closeBlog(){
  document.getElementById(
    "blogPopup"
  ).style.display =
  "none";
}

</script>
</body>
</html>
