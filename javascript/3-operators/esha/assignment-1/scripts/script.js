function add() {
  let a = Number(val1.value);
  let b = Number(val2.value);
  output.innerText = "Result: " + (a + b);
}

function subtract() {
  let a = Number(val1.value);
  let b = Number(val2.value);
  output.innerText = "Result: " + (a - b);
}

function multiply() {
  let a = Number(val1.value);
  let b = Number(val2.value);
  output.innerText = "Result: " + a * b;
}

function divide() {
  let a = Number(val1.value);
  let b = Number(val2.value);
  output.innerText = "Result: " + a / b;
}

function modulus() {
  let a = Number(val1.value);
  let b = Number(val2.value);
  output.innerText = "Result: " + (a % b);
}

function increment() {
  let a = Number(val1.value);
  a++;
  val1.value = a;
  output.innerText = "val1 after ++ = " + a;
}

function decrement() {
  let a = Number(val1.value);
  a--;
  val1.value = a;
  output.innerText = "val1 after -- = " + a;
}
