const dimensionsDiv = document.getElementById("dimensions");

function displayDimensions() {
  dimensionsDiv.innerHTML = `
    <p>Window Width: ${window.innerWidth}px</p>
    <p>Window Height: ${window.innerHeight}px</p>
    <p>Screen Width: ${screen.width}px</p>
    <p>Screen Height: ${screen.height}px</p>
    <p>Outer Width: ${window.outerWidth}px</p>
    <p>Outer Height: ${window.outerHeight}px</p>
  `;
}

window.addEventListener("resize", displayDimensions);
displayDimensions();