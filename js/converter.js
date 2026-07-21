document.addEventListener("DOMContentLoaded", () => {

    const uploadBoxes = document.querySelectorAll(".upload-box");

    uploadBoxes.forEach(box => {

        const input = box.querySelector("input[type='file']");
        const button = box.querySelector(".convert-btn");

        if (!input || !button) return;

        button.addEventListener("click", () => {

            if (input.files.length === 0) {
                alert("Please choose a file first.");
                return;
            }

            const file = input.files[0];

            const fileSize = (file.size / 1024 / 1024).toFixed(2);

            alert(
                "Selected File:\n\n" +
                "Name: " + file.name +
                "\nSize: " + fileSize + " MB" +
                "\nType: " + file.type +
                "\n\nConverter backend will be connected in the next stage."
            );

        });

        input.addEventListener("change", () => {

            if (input.files.length > 0) {

                const file = input.files[0];

                button.textContent =
                    "Convert " + file.name;

            }

        });

    });

});
