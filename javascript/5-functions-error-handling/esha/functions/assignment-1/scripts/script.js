function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function generateFibonacci() {
  const input = document.getElementById("num").value;
  const n = parseInt(input);
  let series = [];

  for (let i = 0; i < n; i++) {
    series.push(fibonacci(i));
  }

  document.getElementById("output").textContent =
    "Series: " + series.join(", ");
}
