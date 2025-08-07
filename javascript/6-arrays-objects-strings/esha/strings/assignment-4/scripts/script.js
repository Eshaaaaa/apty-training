function sortString() {
  const input = document.getElementById("inputStr").value;

  const sorted = input.split("").sort().join("");

  document.getElementById("output").innerText = sorted;
}
