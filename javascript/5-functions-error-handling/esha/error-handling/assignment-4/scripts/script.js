function compute(n1, n2, operator) {
  const numA = Number(n1);
  const numB = Number(n2);

  if (isNaN(numA) || isNaN(numB)) {
    throw new Error("Invalid number input. Please enter numeric values.");
  }

  switch (operator) {
    case "+":
      return numA + numB;
    case "-":
      return numA - numB;
    case "*":
      return numA * numB;
    case "/":
      if (numB === 0) throw new Error("Cannot divide by zero.");
      return numA / numB;
    case "%":
      return numA % numB;
    default:
      throw new Error("Unsupported operator. Allowed: +, -, *, /, %");
  }
}

function runCalculation() {
  const val1 = document.getElementById("val1").value.trim();
  const val2 = document.getElementById("val2").value.trim();
  const operator = document.getElementById("op").value.trim();
  const resultBox = document.getElementById("result");

  try {
    const output = compute(val1, val2, operator);
    resultBox.textContent = `Result: ${output}`;
  } catch (err) {
    resultBox.textContent = `Error: ${err.message}`;
  }
}
