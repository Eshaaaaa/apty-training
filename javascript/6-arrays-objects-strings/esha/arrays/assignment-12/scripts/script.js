function removeDuplicates() {
  const input = document.getElementById("arrayInput").value;
  const nums = input
    .split(",")
    .map((n) => n.trim())
    .filter((n) => n !== "") 
    .map(Number);

  const unique = [];
  for (let i = 0; i < nums.length; i++) {
    if (!unique.includes(nums[i])) {
      unique.push(nums[i]);
    }
  }

  document.getElementById("result").innerText = JSON.stringify(unique);
}
