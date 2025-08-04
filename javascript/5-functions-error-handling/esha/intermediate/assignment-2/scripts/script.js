function filterArray(arr, callback) {
  return arr.filter(callback);
}

function filterNumbers() {
  const numberStr = document.getElementById("numberInput").value;
  const limit = Number(document.getElementById("limitInput").value);

  const numbers = numberStr
    .split(",")
    .map((num) => Number(num.trim()))
    .filter((num) => !isNaN(num));

  const filtered = filterArray(numbers, (n) => n <= limit);

  document.getElementById("result").innerText = `Filtered: [${filtered.join(
    ", "
  )}]`;
}
