const videoURL = document.getElementById("videoURL");
const downloadBtn = document.getElementById("downloadBtn");
const clearBtn = document.getElementById("clearBtn");

downloadBtn.addEventListener("click", () => {

    const url = videoURL.value.trim();

    if (url === "") {
        alert("Please enter a YouTube video URL.");
        return;
    }

    const youtubeRegex =
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;

    if (!youtubeRegex.test(url)) {
        alert("Please enter a valid YouTube URL.");
        return;
    }

    alert(
`The downloader interface is ready.

Backend/API integration is required to download YouTube videos.

This page is fully prepared for future integration.`
    );

});

clearBtn.addEventListener("click", () => {

    videoURL.value = "";

});