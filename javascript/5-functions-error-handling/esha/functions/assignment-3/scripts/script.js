let counter = 0;

document.getElementById("clickBtn").addEventListener("click", () => {
  counter++;
  document.getElementById("count").textContent = counter;
});
