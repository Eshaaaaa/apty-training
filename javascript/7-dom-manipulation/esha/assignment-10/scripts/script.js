const shadowHost = document.getElementById("shadow-host");
const shadowRoot = shadowHost.attachShadow({ mode: "open" });

const shadowContent = `
    <style>
        table {
            width: 100%;
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
        button {
            margin: 2px;
        }
    </style>
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
`;

shadowRoot.innerHTML = shadowContent;

const tableBody = shadowRoot.querySelector("#myTable tbody");
for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>Row ${i}</td>
        <td>
            <button class="select-btn">Select</button>
        </td>
    `;
    tableBody.appendChild(row);
}

shadowRoot.addEventListener("click", (event) => {
    if (event.target.classList.contains("select-btn")) {
        const currentActive = shadowRoot.querySelector(".active-row");
        if (currentActive) {
            currentActive.classList.remove("active-row");
        }
        event.target.closest("tr").classList.add("active-row");
    }
});

document.getElementById("moveUpBtn").addEventListener("click", () => {
    const activeRow = shadowRoot.querySelector(".active-row");
    if (!activeRow) return alert("Select a row first!");
    const prevRow = activeRow.previousElementSibling;
    if (prevRow) {
        activeRow.parentNode.insertBefore(activeRow, prevRow);
    }
});

document.getElementById("moveDownBtn").addEventListener("click", () => {
    const activeRow = shadowRoot.querySelector(".active-row");
    if (!activeRow) return alert("Select a row first!");
    const nextRow = activeRow.nextElementSibling;
    if (nextRow) {
        activeRow.parentNode.insertBefore(activeRow, nextRow.nextElementSibling);
    }
});

document.getElementById("moveTopBtn").addEventListener("click", () => {
    const activeRow = shadowRoot.querySelector(".active-row");
    if (!activeRow) return alert("Select a row first!");
    const tableBody = activeRow.parentNode;
    tableBody.insertBefore(activeRow, tableBody.firstElementChild);
});

document.getElementById("moveBottomBtn").addEventListener("click", () => {
    const activeRow = shadowRoot.querySelector(".active-row");
    if (!activeRow) return alert("Select a row first!");
    const tableBody = activeRow.parentNode;
    tableBody.appendChild(activeRow);
});