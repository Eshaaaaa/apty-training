function calculateArea(length = 5, width = 3) {
  return length * width;
}

function showArea() {
  const lengthInput = document.getElementById("length").value;
  const widthInput = document.getElementById("width").value;

  const length = lengthInput ? parseFloat(lengthInput) : undefined;
  const width = widthInput ? parseFloat(widthInput) : undefined;

  const area = calculateArea(length, width);
  document.getElementById("output").textContent = `Area: ${area}`;
}
