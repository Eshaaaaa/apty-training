function processInput(callback) {
  const input = document.getElementById("textInput").value;
  const result = callback(input || undefined);
  document.getElementById("output").innerText = "Processed: " + result;
}

function toUpper(text = "default text") {
  return text.toUpperCase();
}
