const dynamicObject = {};

function addKeyValue() {
  const key = document.getElementById("keyInput").value.trim();
  const value = document.getElementById("valueInput").value.trim();

  if (key === "") {
    document.getElementById("output").innerText = "Key cannot be empty.";
    return;
  }

  if (key in dynamicObject) {
    dynamicObject[key] = value;
    document.getElementById(
      "output"
    ).innerText = `Key '${key}' updated to '${value}'`;
  } else {
    dynamicObject[key] = value;
    document.getElementById(
      "output"
    ).innerText = `Key '${key}' added with value '${value}'`;
  }

  console.log(dynamicObject);
}
