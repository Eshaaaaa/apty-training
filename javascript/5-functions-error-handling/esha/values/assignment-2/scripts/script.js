const sumAll = (...nums) => {
  let sum = 0;
  for (let n of nums) sum += n;
  return sum;
};

function handleSum() {
  const input = document.getElementById("numbersInput").value;
  const parts = input.split(",");
  const nums = [];

  for (let p of parts) {
    const num = parseFloat(p.trim());
    if (isNaN(num)) {
      document.getElementById("result").textContent = "Invalid input";
      return;
    }
    nums.push(num);
  }

  document.getElementById("result").textContent = "Sum = " + sumAll(...nums);
}
