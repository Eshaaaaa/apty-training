function generateTable() {
  const num = parseFloat(document.getElementById("number").value);
  const output = document.getElementById("output");

  if (isNaN(num)) {
    output.textContent = "Please enter a valid number.";
    return;
  }

  let table = `Table for ${num}:<br/>`;

  for (let i = 1; i <= 10; i++) {
    table += `${num} × ${i} = ${num * i}<br/>`;
  }

  output.innerHTML = table;
}
