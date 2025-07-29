function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

document.getElementById("checkButton").addEventListener("click", function () {
  const yearInput = document.getElementById("year").value;
  const year = parseInt(yearInput, 10);
  const resultDisplay = document.getElementById("result");

  if (isNaN(year) || year < 0) {
    resultDisplay.textContent = "Please enter a valid non-negative year.";
    return;
  }

  resultDisplay.textContent = isLeapYear(year) ? "Leap Year" : "Not a Leap Year";
});
