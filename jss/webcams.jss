/* ==========================================
VidToolkit Pro - webcams.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LIVE PRODUCT SEARCH
    ========================== */

    const searchInput = document.getElementById("searchInput");
    const products = document.querySelectorAll(".product-card");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            products.forEach(card => {

                const text = card.innerText.toLowerCase();

                card.style.display = text.includes(value) ? "block" : "none";

            });

        });

    }

    /* ==========================
       SCROLL ANIMATION
    ========================== */

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(".product-card,.section,.guide-box,.faq,.related-card")
        .forEach(el => observer.observe(el));

});


/* ==========================
   BACK TO TOP BUTTON
========================== */

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#2563eb";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.boxShadow = "0 8px 25px rgba(0,0,0,.25)";
topButton.style.display = "none";
topButton.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================
   CATEGORY ACTIVE LINK
========================== */

const navLinks = document.querySelectorAll(".categories a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   PRODUCT CARD HOVER EFFECT
========================== */

document.querySelectorAll(".product-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


/* ==========================
   BUY BUTTON CLICK EFFECT
========================== */

document.querySelectorAll(".buy-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.innerHTML = "Opening Amazon...";

        setTimeout(() => {

            btn.innerHTML = "View on Amazon";

        }, 2000);

    });

});


/* ==========================
   SIMPLE FADE-IN STYLES
========================== */

const style = document.createElement("style");

style.innerHTML = `

.section,
.product-card,
.guide-box,
.faq,
.related-card{

opacity:0;
transform:translateY(35px);
transition:.6s ease;

}

.show{

opacity:1 !important;
transform:translateY(0) !important;

}

.categories a.active{

background:#2563eb;
color:#fff;

}

`;

document.head.appendChild(style);
