const qrType = document.getElementById("qrType");
const qrInput = document.getElementById("qrInput");
const qrBox = document.getElementById("qrcode");

const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

let qrCode = null;

function formatInput() {
    const value = qrInput.value.trim();

    switch (qrType.value) {
        case "url":
            return value;

        case "email":
            return "mailto:" + value;

        case "phone":
            return "tel:" + value;

        case "whatsapp":
            return "https://wa.me/" + value.replace(/\D/g, "");

        case "wifi":
            // Format:
            // MyWiFi,password123,WPA
            const parts = value.split(",");
            if (parts.length < 3) {
                alert("For WiFi use:\nSSID,password,security");
                return "";
            }
            return `WIFI:T:${parts[2]};S:${parts[0]};P:${parts[1]};;`;

        default:
            return value;
    }
}

generateBtn.addEventListener("click", () => {

    const text = formatInput();

    if (!text) return;

    qrBox.innerHTML = "";

    qrCode = new QRCode(qrBox, {
        text: text,
        width: 250,
        height: 250
    });

});

downloadBtn.addEventListener("click", () => {

    const img = qrBox.querySelector("img");

    const canvas = qrBox.querySelector("canvas");

    let link = document.createElement("a");

    link.download = "vidtoolkit-qr.png";

    if (img) {

        link.href = img.src;

    } else if (canvas) {

        link.href = canvas.toDataURL();

    } else {

        alert("Generate a QR Code first.");

        return;

    }

    link.click();

});

copyBtn.addEventListener("click", () => {

    if (!qrInput.value.trim()) {

        alert("Nothing to copy.");

        return;

    }

    navigator.clipboard.writeText(qrInput.value);

    alert("Copied!");

});

clearBtn.addEventListener("click", () => {

    qrInput.value = "";

    qrBox.innerHTML = "";

});