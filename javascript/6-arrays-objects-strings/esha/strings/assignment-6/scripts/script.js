function getUnicodeValues() {
  const input = document.getElementById("inputStr").value;

  const unicodeArray = [...input].map((char) => char.charCodeAt(0));

  document.getElementById("output").innerText = JSON.stringify(unicodeArray);
}
