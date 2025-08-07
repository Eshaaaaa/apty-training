function filterTasks() {
  const input = document.getElementById("tasksInput").value.trim();
  const output = document.getElementById("completedTasks");

  if (!input) {
    output.innerText = "Please enter an array of task objects.";
    return;
  }

  let tasks;

  try {
    tasks = JSON.parse(input);

    if (!Array.isArray(tasks)) throw new Error();

    tasks = tasks.filter((task) => {
      return (
        task &&
        typeof task.task === "string" &&
        typeof task.completed === "boolean"
      );
    });
  } catch {
    output.innerText =
      "Invalid format. Please enter a valid JSON array of objects.";
    return;
  }

  const completedTaskNames = tasks
    .filter((task) => task.completed)
    .map((task) => task.task);

  output.innerText = completedTaskNames.length
    ? completedTaskNames.join(", ")
    : "No completed tasks found.";
}
