function repeatAction(action, n) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function createList() {
  const text = document.getElementById("itemText").value;
  const count = +document.getElementById("count").value;
  const list = document.getElementById("outputList");
  list.innerHTML = "";

  repeatAction((i) => {
    const li = document.createElement("li");
    li.textContent = `${text} ${i + 1}`;
    list.appendChild(li);
  }, count);
}
