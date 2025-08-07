const output = document.getElementById("output");

const push = document.getElementById("push");
const pop = document.getElementById("pop");
const topElement = document.getElementById("topElement");
const show = document.getElementById("show");

let array = [];

push.addEventListener("click", () => {
  const num = Number(document.getElementById("num").value);
  if (isNaN(num)) {
    output.innerText = `Please enter a valid number`;
    return;
  }
  array.push(num);
  output.innerText = `Pushed Element: ${num}`;
});

pop.addEventListener("click", () => {
  if (array.length === 0) {
    output.innerText = `Stack is empty!`;
    return;
  }
  const x = array.pop();
  output.innerText = `Popped Element: ${x}`;
});

topElement.addEventListener("click", () => {
  if (array.length >= 1) {
    output.innerText = `Top Element: ${array[array.length - 1]}`;
  } else {
    output.innerText = "Stack is empty";
  }
});

show.addEventListener("click", () => {
  output.innerText = `Stack Elements: ${array}`;
});
