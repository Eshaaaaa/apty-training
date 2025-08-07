function checkScores() {
  const input = document.getElementById("scoresInput").value.trim();
  const resultSpan = document.getElementById("result");
  const studentsPre = document.getElementById("students");

  if (!input) {
    resultSpan.innerText = "Please enter student scores.";
    studentsPre.innerText = "";
    return;
  }

  let students;

  try {
    students = JSON.parse(input);

    if (
      !Array.isArray(students) ||
      !students.every(
        (s) => typeof s.name === "string" && typeof s.score === "number"
      )
    ) {
      throw new Error("Invalid data format");
    }
  } catch {
    resultSpan.innerText =
      "❌ Invalid input. Please enter a valid array of student objects.";
    studentsPre.innerText = "";
    return;
  }

  const allPassed = students.every((s) => s.score > 35);
  const someFailed = students.some((s) => s.score < 35);

  const result = allPassed
    ? "✅ All Students Passed"
    : someFailed
    ? "⚠️ Some Students Failed"
    : "Unknown";

  resultSpan.innerText = result;
  studentsPre.innerText = JSON.stringify(students);
}
