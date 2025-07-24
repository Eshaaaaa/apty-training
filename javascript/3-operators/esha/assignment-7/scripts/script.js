function getNumberValues() {
  const val1Input = document.getElementById("val1").value;
  const val2Input = document.getElementById("val2").value;

  const v1 = parseInt(val1Input, 10);
  const v2 = parseInt(val2Input, 10);

  return { v1, v2 };
}
function displayResult(result) {
  document.getElementById("result").innerText = `Result: ${result}`;
}

function performBitwiseAND() {
  const values = getNumberValues();
  if (values) {
    const result = values.v1 & values.v2;
    displayResult(result);
  }
}

function performBitwiseOR() {
  const values = getNumberValues();
  if (values) {
    const result = values.v1 | values.v2;
    displayResult(result);
  }
}

function performBitwiseXOR() {
  const values = getNumberValues();
  if (values) {
    const result = values.v1 ^ values.v2;
    displayResult(result);
  }
}

function performBitwiseNOT() {
  const val1Input = document.getElementById("val1").value;
  const v1 = parseInt(val1Input, 10);

  const result = ~v1;
  displayResult(result);
}

function performLeftShift() {
  const values = getNumberValues();
  if (values) {
    const result = values.v1 << values.v2;
    displayResult(result);
  }
}

function performRightShift() {
  const values = getNumberValues();
  if (values) {
    const result = values.v1 >> values.v2;
    displayResult(result);
  }
}
