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
  let val1Input = document.getElementById("val1");
  let val2Input = document.getElementById("val2");
  let type1 = document.getElementById("type1").value;
  let type2 = document.getElementById("type2").value;

  let v1 = convert(val1Input.value, type1);
  let v2 = convert(val2Input.value, type2);

  return { v1, v2 };
}

function displayResult(newValue1) {
  const val1Input = document.getElementById("val1");
  if (typeof newValue1 === "object" && newValue1 !== null) {
    val1Input.value = JSON.stringify(newValue1);
  } else if (newValue1 === undefined) {
    val1Input.value = "undefined";
  } else if (newValue1 === null) {
    val1Input.value = "null";
  } else {
    val1Input.value = String(newValue1);
  }

  document.getElementById(
    "result"
  ).innerText = `Result (Value 1 after operation): ${newValue1}`;
  console.log("Value 1 updated to:", newValue1);
}

function performLogicalANDAssignment() {
  let { v1, v2 } = getAndConvertValues();
  if (v1) {
    v1 = v2;
  }
  displayResult(v1);
}

function performLogicalORAssignment() {
  let { v1, v2 } = getAndConvertValues();
  if (!v1) {
    v1 = v2;
  }
  displayResult(v1);
}

function performNullishCoalescingAssignment() {
  let { v1, v2 } = getAndConvertValues();
  if (v1 === null || v1 === undefined) {
    v1 = v2;
  }
  displayResult(v1);
}
