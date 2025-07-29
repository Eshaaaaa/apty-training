function checkOddEven() {
  const value = parseFloat(document.getElementById("num").value);
  const result = document.getElementById("result");

  if (isNaN(value)) {
    result.textContent = "Result: Please enter a valid number.";
    return;
  }

  if (!Number.isInteger(value)) {
    result.textContent = "Result: Please enter a whole number (integer).";
    return;
  }
  
  if (value % 2 === 0) {
    result.textContent = "Result: The number is Even.";
  } else {
    result.textContent = "Result: The number is Odd.";
  }
}
