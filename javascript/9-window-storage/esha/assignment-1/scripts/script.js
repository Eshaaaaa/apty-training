const urlInput = document.getElementById("urlInput");
const goButton = document.getElementById("goButton");
const backButton = document.getElementById("backButton");
const forwardButton = document.getElementById("forwardButton");
const reloadButton = document.getElementById("reloadButton");

goButton.addEventListener("click", () => {
    const url = urlInput.value.trim();
    if (url) {
        const formattedUrl = url.startsWith("http") ? url : `https://${url}`;
        window.location.href = formattedUrl;
    }
});

backButton.addEventListener("click", () => window.history.back());
forwardButton.addEventListener("click", () => window.history.forward());
reloadButton.addEventListener("click", () => window.location.reload());