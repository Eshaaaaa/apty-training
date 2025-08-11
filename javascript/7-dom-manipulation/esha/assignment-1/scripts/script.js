function changeColorById() {
  const pElement1 = document.getElementById("para1");
  const pElement2 = document.getElementById("para2");

  const colors = ["red", "green", "blue", "purple", "orange"];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  pElement1.style.color = randomColor;
  pElement2.style.color = randomColor;
}

function toggleBackgroundColor() {
  const elements = document.getElementsByClassName("group");
  for (let element of elements) {
    element.classList.toggle("highlight");
  }
}

function updateText() {
  const spanElements = document.getElementsByTagName("span");
  for (let span of spanElements) {
    span.innerHTML = "Updated span text!";
  }
}

function toggleInputDisabled() {
  const inputs = document.getElementsByName("input1");
  for (let input of inputs) {
    input.disabled = !input.disabled;
  }
}

function addNewCustomAttribute() {
  const pElement = document.querySelector("[data-custom]");
  pElement.setAttribute("data-new-attribute", "newValue");
  alert("Custom attribute added!");
}
