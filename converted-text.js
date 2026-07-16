document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const products = document.querySelectorAll(".product-card");

    if (searchInput) {
        searchInput.addEventListener("keyup", function() {
            const value = this.value.toLowerCase();
            products.forEach(card => {
                const text = card.innerText.toLowerCase();
                card.style.display = text.includes(value) ? "block" : "none";
            });
        });
    }

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

const topButton = document.createElement("button");
topButton.innerHTML = "⬆";
topButton.id = "topButton";
document.body.appendChild(topButton);

Object.assign(topButton.style, {
    position: "fixed",
    right: "25px",
    bottom: "25px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
    boxShadow: "0 8px 25px rgba(0,0,0,.25)",
    display: "none",
    zIndex: "9999"
});

window.addEventListener("scroll", () => {
    topButton.style.display = window.scrollY > 400 ? "block" : "none";
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const navLinks = document.querySelectorAll(".categories a");

window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll("section").forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
});

document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.innerHTML = "Opening Amazon...";
        setTimeout(() => {
            btn.innerHTML = "View on Amazon";
        }, 2000);
    });
});

const style = document.createElement("style");
style.innerHTML = `
.section, .product-card, .guide-box, .faq, .related-card {
    opacity: 0;
    transform: translateY(35px);
    transition: .6s ease;
}

.show {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.categories a.active {
    background: #2563eb;
    color: #fff;
}
`;
document.head.appendChild(style);