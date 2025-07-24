function convert(val, type) {
  if (type === "Number") return Number(val);
  else if (type === "Boolean") return val === "true";
  else if (type === "Undefined") return undefined;
  else if (type === "Null") return null;
  else if (type === "Object") {
    try {
      return JSON.parse(val);
    } catch (e) {
      return val;
    }
  } else {
    return String(val);
  }
}

function getAndConvertValues() {
  let v1 = document.getElementById("val1").value;
  let v2 = document.getElementById("val2").value;
  let t1 = document.getElementById("type1").value;
  let t2 = document.getElementById("type2").value;

  v1 = convert(v1, t1);
  v2 = convert(v2, t2);

  return [v1, v2];
}

function displayResult(result) {
  document.getElementById("result").innerHTML = `Result: ${result}`;
}

function compareEqual() {
  const [v1, v2] = getAndConvertValues();
  displayResult(v1 == v2);
}

function compareStrictEqual() {
  const [v1, v2] = getAndConvertValues();
  displayResult(v1 === v2);
}

function compareNotEqual() {
  const [v1, v2] = getAndConvertValues();
  displayResult(v1 != v2);
}

function compareStrictNotEqual() {
  const [v1, v2] = getAndConvertValues();
  displayResult(v1 !== v2);
}

function compareGreaterThan() {
  const [v1, v2] = getAndConvertValues();
  displayResult(v1 > v2);
}

function compareLessThan() {
  const [v1, v2] = getAndConvertValues();
  displayResult(v1 < v2);
}

function compareGreaterThanOrEqual() {
  const [v1, v2] = getAndConvertValues();
  displayResult(v1 >= v2);
}

function compareLessThanOrEqual() {
  const [v1, v2] = getAndConvertValues();
  displayResult(v1 <= v2);
}
