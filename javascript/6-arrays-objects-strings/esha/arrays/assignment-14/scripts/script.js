function swapVariables() {
  let a = Number(document.getElementById("aInput").value);
  let b = Number(document.getElementById("bInput").value);

  [a, b] = [b, a];

  document.getElementById("aResult").innerText = a;
  document.getElementById("bResult").innerText = b;
}
