function calculateRectangle(length = 7, width = 3) {
  const userLength = document.getElementById("length").value;
  const userWidth = document.getElementById("width").value;

  length = userLength ? Number(userLength) : length;
  width = userWidth ? Number(userWidth) : width;

  const perimeter = 2 * (length + width);

  function calculateArea() {
    return length * width;
  }

  const area = calculateArea();

  document.getElementById(
    "result"
  ).innerText = `Perimeter: ${perimeter}, Area: ${area}`;
}
