function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 50) return "C";
  return "F";
}

document.getElementById("getGrade").addEventListener("click", function () {
  const input = document.getElementById("marks");
  const val = Number(input.value);

  const resultDisplay = document.getElementById("result");

  if (isNaN(val) || val < 0 || val > 100) {
    resultDisplay.textContent = "Please enter a valid number between 0 and 100.";
    return;
  }

  const grade = getGrade(val);
  resultDisplay.textContent = `Grade: ${grade}`;
});
