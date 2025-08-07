function chunkArray() {
  const input = document.getElementById("arrayInput").value;
  const chunkSize = parseInt(document.getElementById("chunkInput").value);
  const output = document.getElementById("chunkedArray");

  if (!input.trim()) {
    output.innerText = "Please enter some array values.";
    return;
  }

  if (isNaN(chunkSize) || chunkSize <= 0) {
    output.innerText = "Please enter a valid chunk size (number > 0).";
    return;
  }

  const inputArray = input.split(",").map((el) => Number(el.trim()));
  const result = [];

  for (let i = 0; i < inputArray.length; i += chunkSize) {
    result.push(inputArray.slice(i, i + chunkSize));
  }

  output.innerText = JSON.stringify(result);
}
