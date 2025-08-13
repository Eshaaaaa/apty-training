const keydownDiv = document.getElementById("keydownDiv");
const keyupDiv = document.getElementById("keyupDiv");

window.addEventListener("keydown", (e) => {
  keydownDiv.textContent += ` 
    ${e.key} 
    ${e.ctrlKey ? "+Ctrl" : ""} 
    ${e.altKey ? "+Alt" : ""} 
    ${e.shiftKey ? "+Shift" : ""}\n`;
});

window.addEventListener("keyup", (e) => {
  keyupDiv.textContent += `
    ${e.key} 
    ${e.ctrlKey ? "+Ctrl" : ""}
    ${e.altKey ? "+Alt" : ""}
    ${e.shiftKey ? "+Shift" : ""}\n`;
});
