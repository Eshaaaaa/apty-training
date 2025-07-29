function calculateFactorial() {
  let num = parseInt(document.getElementById("number").value);
  let original = num; 
  let fact = 1;

  if (num < 0 || isNaN(num)) {
    document.getElementById("result").textContent = "Please enter a valid non-negative number.";
    return;
  }

  if (original === 0) {
    document.getElementById("result").textContent = `Factorial of ${original} is 1`;
    return;
  }

  do {
    fact *= num;
    num--;
  } while (num >= 1);

  document.getElementById("result").textContent = `Factorial of ${original} is ${fact}`;
}
