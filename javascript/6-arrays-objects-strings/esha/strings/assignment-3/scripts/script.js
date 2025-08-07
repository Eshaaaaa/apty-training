function replaceEscapeSequences() {
  const input = document.getElementById("inputStr").value;

  const converted = input
    .replace(/\\n/g, "\\\\n")
    .replace(/\\t/g, "\\\\t");

  document.getElementById("output").innerText = converted;
}
