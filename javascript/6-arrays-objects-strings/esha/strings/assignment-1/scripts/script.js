function getWordLengths() {
  const input = document.getElementById("inputText").value;
  const output = input
    .trim()
    .split(/\s+/) 
    .map((word) => word.length)
    .join(" ");
  document.getElementById("result").innerText = output;
}
