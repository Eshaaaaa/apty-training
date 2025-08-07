function customFlatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(customFlatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

function flattenInput() {
  const input = document.getElementById("arrayInput").value;

  try {
    const arr = JSON.parse(input);
    const flattened = customFlatten(arr);
    document.getElementById("output").textContent = JSON.stringify(flattened);
  } catch (e) {
    document.getElementById("output").textContent =
      "Invalid input. Please enter a valid array.";
  }
}
