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
