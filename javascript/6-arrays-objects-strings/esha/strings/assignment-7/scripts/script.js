function padWithZeros() {
  const input = document.getElementById("inputStr").value;

  const padded = input.padStart(10, "0");

  document.getElementById("output").innerText = padded;
}
