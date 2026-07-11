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
      transition:0.3s;
      border:1px solid rgba(255,255,255,0.08);
    }

    .card:hover{
      transform:translateY(-10px);
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

      .nav-links{
        display:none;
      }
    }
  </style>
</head>

<body>

<header>
  <div class="container">
    <nav>

      <div class="logo">
        VidToolkit Pro
      </div>

      <div class="nav-links">
        <a href="#">Home</a>
        <a href="#">Tools</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>

      <button class="theme-btn">
        <i class="fas fa-moon"></i>
      </button>

    </nav>
  </div>
</header>

<section class="hero">
  <div class="container">

    <h1>
      All-in-One
      <span class="gradient">Creator Tools</span>
      Platform
    </h1>

    <p>
      Powerful utilities for YouTube, Instagram,
      Facebook and TikTok creators.
      Analyze video links, download thumbnails,
      generate QR codes and access professional tools.
    </p>

    <div class="search-box">
      <input type="text"
             placeholder="Paste YouTube, Instagram or Facebook link">
      <button class="btn">
        Explore Tools
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

      <div class="card">
        <i class="fas fa-chart-line"></i>
        <h3>Metadata Viewer</h3>
        <p>View title, description and other public information.</p>
      </div>

      <div class="card">
        <i class="fas fa-qrcode"></i>
        <h3>QR Generator</h3>
        <p>Create QR codes for your links and profiles.</p>
      </div>

      <div class="card">
        <i class="fas fa-hashtag"></i>
        <h3>Hashtag Generator</h3>
        <p>Generate hashtags for social media content.</p>
      </div>

      <div class="card">
        <i class="fas fa-link"></i>
        <h3>Link Shortener</h3>
        <p>Create shorter links for easy sharing.</p>
      </div>

      <div class="card">
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
  const themeButton = document.querySelector('.theme-btn');

  themeButton.addEventListener('click', () => {
    if (document.body.style.background === 'white') {
      document.body.style.background = '#0f172a';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.background = 'white';
      document.body.style.color = '#111827';
    }
  });
</script>
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
</body>
</html>
