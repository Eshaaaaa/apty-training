function calculateInterest() {
  const p = parseFloat(document.getElementById("principal").value);
  const r = parseFloat(document.getElementById("rate").value);
  const t = parseFloat(document.getElementById("time").value);
  const result = document.getElementById("result");

  if (isNaN(p) || isNaN(r) || isNaN(t)) {
    result.textContent = "Result: Please enter valid numbers in all fields.";
    return;
  }

  if (p < 0 || r < 0 || t < 0) {
    result.textContent = "Result: Principal, Rate, and Time must be non-negative.";
    return;
  }

  const interest = (p * r * t) / 100;
  result.textContent = `Result: Simple Interest is ₹${interest.toFixed(2)}`;
}
