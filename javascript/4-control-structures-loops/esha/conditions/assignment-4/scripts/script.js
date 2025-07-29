function findLargest() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const c = parseFloat(document.getElementById("num3").value);
  const result = document.getElementById("result");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    result.textContent = "Result: Please enter valid numbers in all fields.";
    return;
  }

  let largest;

  if (a === b && b === c) {
    result.textContent = `Result: All numbers are equal, and they are ${a}.`;
    return;
  }

  if (a >= b && a >= c) {
    largest = a;
  } else if (b >= a && b >= c) {
    largest = b;
  } else {
    largest = c;
  }

  result.textContent = `Result: The largest number is ${largest}`;
}