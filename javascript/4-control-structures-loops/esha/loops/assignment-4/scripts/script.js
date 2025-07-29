function calculate() {
  const inputElement = document.getElementById("numbers");
  const resultElement = document.getElementById("result");

  const rawInput = inputElement.value;
  resultElement.innerHTML = "";

  if (rawInput.trim() === "") {
    resultElement.innerHTML = `Please enter numbers separated by commas.`;
    return;
  }

  const stringNumbers = rawInput.split(",");
  let sum = 0;
  let count = 0;

  for (let str of stringNumbers) {
    const num = parseFloat(str);

    if (isNaN(num)) {
      resultElement.innerHTML = `Error: This array is not valid. Please use only numbers and commas.`;
      return;
    }
    sum += num;
    count++;
  }

  if (count === 0) {
    resultElement.innerHTML = `No valid numbers found.`;
    return;
  }

  const average = sum / count;
  resultElement.innerHTML = `Sum: ${sum}<br>Average: ${average.toFixed(2)}`;
}