function extractNames() {
  const input = document.getElementById("namesInput").value;

  if (!input.trim()) {
    document.getElementById("firstThree").innerText = "No input provided.";
    document.getElementById("lastTwo").innerText = "No input provided.";
    return;
  }

  const names = input
    .split(",")
    .map((name) => name.trim())
    .filter((name) => name !== "");

  const firstThree = names.slice(0, 3);
  const lastTwo = names.slice(-2); 

  document.getElementById("firstThree").innerText = firstThree.join(", ");
  document.getElementById("lastTwo").innerText = lastTwo.join(", ");
}
