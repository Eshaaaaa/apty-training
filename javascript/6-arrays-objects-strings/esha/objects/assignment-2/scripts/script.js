function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function cloneObject() {
  try {
    const obj = JSON.parse(document.getElementById("objectInput").value);
    const clone = deepClone(obj);
    document.getElementById("original").innerText = JSON.stringify(
      obj,
      null,
      2
    );
    document.getElementById("cloned").innerText = JSON.stringify(
      clone,
      null,
      2
    );
  } catch (error) {
    alert(" Error: Invalid JSON format!\n\n" + error.message);
    console.error("Parsing Error:", error);
  }
}
