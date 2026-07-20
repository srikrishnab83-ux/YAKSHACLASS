document.addEventListener("DOMContentLoaded", function () {

    const searchBox =
        document.querySelector(".search-box") ||
        document.querySelector(".searchBox");

    if (!searchBox) return;

    const searchInput = searchBox.querySelector("input");
    const searchBtn = searchBox.querySelector("button");

    const cards = document.querySelectorAll(
        ".product-card, .productCard, .storeCard"
    );

    function searchProducts() {

        const keyword = searchInput.value.trim().toLowerCase();
        let found = false;

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(keyword) || keyword === "") {
                card.style.display = "";
                found = true;
            } else {
                card.style.display = "none";
            }

        });

        let noResult = document.getElementById("noResults");

        if (!found && keyword !== "") {

            if (!noResult) {

                noResult = document.createElement("h3");
                noResult.id = "noResults";
                noResult.style.textAlign = "center";
                noResult.style.margin = "40px 0";
                noResult.style.color = "#666";
                noResult.textContent = "No matching products found.";

                const grid = cards[0]?.parentElement;
                if (grid) {
                    grid.after(noResult);
                }

            }

        } else {

            if (noResult) {
                noResult.remove();
            }

        }

    }

    searchBtn.addEventListener("click", searchProducts);

    searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            searchProducts();
        }
    });

});
