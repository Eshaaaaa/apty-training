const factorial = (function () {
  const cache = {};

  return function (n) {
    if (n in cache) return { value: cache[n], fromCache: true };
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    cache[n] = result;
    return { value: result, fromCache: false };
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
  const message = result.fromCache
    ? `Cached: ${result.value}`
    : `Computed: ${result.value}`;
  document.getElementById("output").innerText = message;
}
