const sortArray = function(arr) {
  return arr.sort((a, b) => a - b);
};

function sortNumbers() {
  const input = document.getElementById("numberInput").value;
  const parts = input.split(",");
  const numArray = [];

  for (let str of parts) {
    const num = parseInt(str); 
    if (isNaN(num)) {
      document.getElementById("error").innerHTML =
        "Error: Please enter only valid numbers separated by commas.";
      return;
    }
    numArray.push(num);
  }

  document.getElementById("error").innerHTML = "";

  const sorted = sortArray(numArray);
  const resultBody = document.getElementById("resultBody");
  resultBody.innerHTML = "";

  for (let n of sorted) {
    const row = document.createElement("tr");
    row.innerHTML = "<td>" + n + "</td>";
    resultBody.appendChild(row);
  }
}
