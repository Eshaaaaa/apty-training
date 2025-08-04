function parseJSON() {
  const input = document.getElementById("str").value;
  const output = document.getElementById("output");

  try {
    JSON.parse(input);
    output.textContent = "✅ Valid JSON";
  } catch (error) {
    let message = "❌ Invalid JSON format.\n";
    message += `Error details: ${error.message}`;
    output.textContent = message;
  }
}