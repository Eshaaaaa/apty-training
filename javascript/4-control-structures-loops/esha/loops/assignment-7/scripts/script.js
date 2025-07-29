function generatePyramid() {
  const rows = parseInt(document.getElementById("rows").value);
  let output = "";

  for (let i = 1; i <= rows; i++) {
    for (let space = 1; space <= rows - i; space++) {
      output += " ";
    }
    for (let star = 1; star <= 2 * i - 1; star++) {
      output += "*";
    }
    output += "\n";
  }

  document.getElementById("pattern").textContent = output;
}
