function getFirstAndLast() {
  const str = document.getElementById("inputStr").value.trim();

  if (str.length === 0) {
    document.getElementById("output").innerText = "null";
    return;
  }

  const firstChar = str[0];
  const lastChar = str[str.length - 1];
  document.getElementById("output").innerText = ` First Letter: ${firstChar} and Last Letter: ${lastChar}`;
}
