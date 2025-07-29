function calculateSum() {
  const num = parseInt(document.getElementById("number").value);
  let sum = 0;
  let i = 1;

  while (i <= num) {
    sum += i;
    i++;
  }

  document.getElementById("result").textContent = `Sum from 1 to ${num} is ${sum}`;
}
