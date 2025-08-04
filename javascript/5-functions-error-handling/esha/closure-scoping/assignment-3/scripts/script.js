const factorial = (function () {
  const cache = {};

  return function (n) {
    if (n in cache) return `Cached: ${cache[n]}`;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    cache[n] = result;
    return `Computed: ${result}`;
  };
})();

function calculate() {
  const n = +document.getElementById("numInput").value;
  if (n < 0 || isNaN(n)) {
    document.getElementById("output").innerText =
      "Enter a non-negative number.";
    return;
  }
  const result = factorial(n);
  document.getElementById("output").innerText = result;
}
