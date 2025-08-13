const table = document.getElementById("myTable").querySelector("tbody");

for (let i = 1; i <= 10; i++) {
  const tr = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    const td = document.createElement("td");
    td.textContent = `${i},${j}`;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

const mainTable = document.getElementById("myTable");

mainTable.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "TD") {
    const colIndex = e.target.cellIndex;
    const rowIndex = e.target.parentNode.rowIndex;

    for (let cell of table.rows[rowIndex].cells) {
      cell.classList.add("highlight");
    }

    for (let row of table.rows) {
      row.cells[colIndex].classList.add("highlight");
    }
  }
});

mainTable.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "TD") {
    const colIndex = e.target.cellIndex;
    const rowIndex = e.target.parentNode.rowIndex;

    for (let cell of table.rows[rowIndex].cells) {
      cell.classList.remove("highlight");
    }

    for (let row of table.rows) {
      row.cells[colIndex].classList.remove("highlight");
    }
  }
});
