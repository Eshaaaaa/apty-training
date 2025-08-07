function sortStudents() {
  const input = document.getElementById("studentsInput").value.trim();
  let students;

  try {
    students = JSON.parse(input);
  } catch (error) {
    document.getElementById("sortedStudents").innerText =
      "❌ Invalid JSON input!";
    return;
  }

  if (!Array.isArray(students)) {
    document.getElementById("sortedStudents").innerText =
      "❌ Input must be a JSON array.";
    return;
  }

  const valid = students.every(
    (s) => typeof s.name === "string" && typeof s.score === "number"
  );

  if (!valid) {
    document.getElementById("sortedStudents").innerText =
      "❌ Each object must have 'name' (string) and 'score' (number).";
    return;
  }

  students.sort((a, b) => b.score - a.score);

  document.getElementById("sortedStudents").innerText = JSON.stringify(students);
}
