function add() {
  let a = Number(val1.value);
  let b = Number(val2.value);
  a += b;
  result.innerText = "Result: " + a;
}

function subtract() {
  let a = Number(val1.value);
  let b = Number(val2.value);
  a -= b;
  result.innerText = "Result: " + a;
}

function multiply() {
  let a = Number(val1.value);
  let b = Number(val2.value);
  a *= b;
  result.innerText = "Result: " + a;
}

function divide() {
  let a = Number(val1.value);
  let b = Number(val2.value);
  a /= b;
  result.innerText = "Result: " + a;
}

function modulus() {
  let a = Number(val1.value);
  let b = Number(val2.value);
  a %= b;
  result.innerText = "Result: " + a;
}

function increment() {
  let a = Number(val1.value);
  a++;
  result.innerText = "Result: " + a;
}

function decrement() {
  let a = Number(val1.value);
  a--;
  result.innerText = "Result: " + a;
}
