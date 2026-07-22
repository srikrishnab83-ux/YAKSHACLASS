/* ==========================================
   VidToolkit Pro
   Creator Resources JavaScript
========================================== */

/* ========= Back To Top ========= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

if(window.scrollY > 500){

backToTop.style.display = "flex";

}else{

backToTop.style.display = "none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* ========= Smooth Anchor Scroll ========= */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* ========= Live Search ========= */

const searchInput=document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

const cards=document.querySelectorAll(".software-card,.guide-card,.category-card");

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}


/* ========= Scroll Animation ========= */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

document.querySelectorAll(

".software-card,.hero-card,.category-card,.guide-card,.feature-box,.testimonial-card"

).forEach(el=>{

observer.observe(el);

});


/* ========= Newsletter Validation ========= */

const newsletter=document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit",function(e){

e.preventDefault();

const email=this.querySelector("input").value.trim();

const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(regex.test(email)){

alert("✅ Thank you for subscribing!");

this.reset();

}else{

alert("Please enter a valid email address.");

}

});

}


/* ========= Counter Animation ========= */

const counters=document.querySelectorAll(".hero-card h3");

let started=false;

window.addEventListener("scroll",()=>{

if(started) return;

const hero=document.querySelector(".hero-right");

if(hero && window.scrollY>hero.offsetTop-400){

started=true;

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=Math.ceil(target/40);

const interval=setInterval(()=>{

count+=speed;

if(count>=target){

count=target;

clearInterval(interval);

}

counter.innerText=count+"+";

},30);

});

}

});


/* ========= Active Navigation ========= */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* ========= Card Hover Glow ========= */

document.querySelectorAll(

".software-card,.guide-card,.feature-box"

).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(91,108,255,.18),
#121A2A 70%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#121A2A";

});

});


/* ========= Page Loaded ========= */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

console.log("VidToolkit Pro - Creator Resources Loaded");

});