function modifyColors() {
  const input = document.getElementById("colorsInput").value;
  const colors = input.split(",").map(color => color.trim()).filter(c => c !== "");

  const blueIndex = colors.indexOf("Blue");
  if (blueIndex !== -1) {
    colors.splice(blueIndex, 1, "Purple"); 
  }

  const yellowIndex = colors.indexOf("Yellow");
  if (yellowIndex !== -1) {
    colors.splice(yellowIndex + 1, 0, "Orange"); 
  }

  const greenIndex = colors.indexOf("Green");
  if (greenIndex !== -1) {
    colors.splice(greenIndex, 1); 
  }

  document.getElementById("modifiedColors").innerText = colors.join(", ");
}
