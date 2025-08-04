function parseJSON() {
  const input = document.getElementById("str").value;
  const output = document.getElementById("output");

  try {
    JSON.parse(input);
    output.textContent = "✅ Valid JSON";
  } catch (error) {
    let message = "❌ Invalid JSON format.";

    if (input.includes("'")) {
      message +=
        " JSON does not support single quotes. Use double quotes instead.";
    }

    if (!input.includes('"')) {
      message += " Make sure all keys and string values are in double quotes.";
    }

    message += `\nError details: ${error.message}`;
    output.textContent = message;
  }
}
