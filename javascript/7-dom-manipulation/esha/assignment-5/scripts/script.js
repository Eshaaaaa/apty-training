const output = document.getElementById("output");
const count = document.getElementById("count");
count.addEventListener("click", function () {
  const firstLevelElements = document.body.children;
  output.innerHTML = "";
  for (const parent of firstLevelElements) {
    if (parent.tagName === "SCRIPT" || parent.tagName === "LINK") {
      continue;
    }
    const nestedCount = parent.querySelectorAll("*").length;
    output.innerHTML += `<li>${parent.tagName.toLowerCase()}; = ${nestedCount} nested elements</li>`;
  }
});
