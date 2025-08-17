const xInput = document.getElementById("xInput");
const yInput = document.getElementById("yInput");
const goToBtn = document.getElementById("goToBtn");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");

goToBtn.addEventListener("click", () => {
    const x = parseInt(xInput.value) || 0;
    const y = parseInt(yInput.value) || 0;
    window.scrollTo(x,y);
});

upBtn.addEventListener("click", () => {
    window.scrollBy(0,-10);
});

downBtn.addEventListener("click", () => {
    window.scrollBy(0,10);
});