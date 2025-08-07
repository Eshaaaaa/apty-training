function processArray() {
  try {
    const numbers = JSON.parse(document.getElementById("numbers").value);

    if (!Array.isArray(numbers)) throw new Error();

    const result = numbers
      .filter((num) => num % 2 === 0)
      .map((num) => num * 2)
      .reduce((sum, num) => sum + num, 0);

    document.getElementById("result").innerText = result;
  } catch {
    document.getElementById("result").innerText =
      "Please enter a valid number array.";
  }
}
