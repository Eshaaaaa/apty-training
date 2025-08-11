const iframe = document.getElementById("tableIframe");
const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

const iframeContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Moving Table Rows</title>
                <style>
                    body {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }
                    table {
                        width: 50%;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 10px;
                        text-align: center;
                    }
                    tr.active-row {
                        background-color: lightblue;
                    }
                </style>
            </head>
            <body>
                <h1>Moving Table Rows</h1>
                <table id="myTable">
                    <thead>
                        <tr>
                            <th>Row Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </body>
            </html>
        `;

iframeDoc.open();
iframeDoc.write(iframeContent);
iframeDoc.close();

const tableBody = iframeDoc.querySelector("#myTable tbody");
for (let i = 1; i <= 10; i++) {
  const row = iframeDoc.createElement("tr");
  row.innerHTML = `
                <td>Row ${i}</td>
                <td>
                    <button class="select-btn">Select</button>
                </td>
            `;
  tableBody.appendChild(row);
}

iframeDoc.addEventListener("click", (event) => {
  if (event.target.classList.contains("select-btn")) {
    const currentActive = iframeDoc.querySelector(".active-row");
    if (currentActive) {
      currentActive.classList.remove("active-row");
    }
    event.target.closest("tr").classList.add("active-row");
  }
});

document.getElementById("moveUpBtn").addEventListener("click", () => {
  const activeRow = iframeDoc.querySelector(".active-row");
  if (!activeRow) return alert("Select a row first!");
  const prevRow = activeRow.previousElementSibling;
  if (prevRow) {
    activeRow.parentNode.insertBefore(activeRow, prevRow);
  }
});

document.getElementById("moveDownBtn").addEventListener("click", () => {
  const activeRow = iframeDoc.querySelector(".active-row");
  if (!activeRow) return alert("Select a row first!");
  const nextRow = activeRow.nextElementSibling;
  if (nextRow) {
    activeRow.parentNode.insertBefore(activeRow, nextRow.nextElementSibling);
  }
});

document.getElementById("moveTopBtn").addEventListener("click", () => {
  const activeRow = iframeDoc.querySelector(".active-row");
  if (!activeRow) return alert("Select a row first!");
  const tableBody = activeRow.parentNode;
  tableBody.insertBefore(activeRow, tableBody.firstElementChild);
});

document.getElementById("moveBottomBtn").addEventListener("click", () => {
  const activeRow = iframeDoc.querySelector(".active-row");
  if (!activeRow) return alert("Select a row first!");
  const tableBody = activeRow.parentNode;
  tableBody.appendChild(activeRow);
});
