function calculate(operator) {
  const val1 = document.getElementById("val1");
  const val2 = document.getElementById("val2");
  const output = document.getElementById("output");

  const a = parseFloat(val1.value);
  const b = parseFloat(val2.value);

  let result;

  if (operator === "++" || operator === "--") {
    if (isNaN(a)) {
      output.textContent = "Result: Invalid input in Value 1";
      return;
    }
    result = operator === "++" ? a + 1 : a - 1;
    val1.value = result;
  } else {
    if (isNaN(a) || isNaN(b)) {
      output.textContent = "Result: Invalid input in one or both fields";
      return;
    }

    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = b === 0 ? "Cannot divide by 0" : a / b;
        break;
      case "%":
        result = b === 0 ? "Cannot mod by 0" : a % b;
        break;
      default:
        result = "Invalid operator";
    }
  }

  output.textContent = `Result: ${result}`;
}
