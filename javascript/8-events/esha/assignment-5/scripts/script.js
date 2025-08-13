const parentDiv = document.getElementById("parentDiv");
const childDiv = document.getElementById("childDiv");

parentDiv.addEventListener("click", () => alert("Parent Div Clicked"));
childDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Child Div Clicked");
});
