function convert(val, type) {
  if (type === "Number") return Number(val);
  if (type === "Boolean") return val === "true";
  if (type === "Undefined") return undefined;
  if (type === "Null") return null;
  if (type === "Object") {
    try {
      return JSON.parse(val);
    } catch (e) {
      return val;
    }
  }
  return String(val);
}

function getAndConvertValues() {
  let v1 = document.getElementById("val1").value;
  let v2 = document.getElementById("val2").value;
  let t1 = document.getElementById("type1").value;
  let t2 = document.getElementById("type2").value;

  v1 = convert(v1, t1);
  v2 = convert(v2, t2);

  return { v1, v2 };
}

function displayResult(result) {
  console.log("Displaying result:", result);
  document.getElementById("result").innerText = `Result: ${result}`;
}

function performAnd() {
  const { v1, v2 } = getAndConvertValues();
  displayResult(v1 && v2);
}

function performOr() {
  const { v1, v2 } = getAndConvertValues();
  displayResult(v1 || v2);
}

function performNot() {
  let v1 = document.getElementById("val1").value;
  let t1 = document.getElementById("type1").value;
  v1 = convert(v1, t1);
  displayResult(!v1);
}
