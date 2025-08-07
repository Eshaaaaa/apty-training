function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let transposed = [];

  for (let i = 0; i < cols; i++) {
    transposed[i] = [];
    for (let j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }

  return transposed;
}

const div = document.getElementById("output");

document.getElementById("submit").addEventListener("click", (event) => {
  let input = document.getElementById("input").value;
  input = input.trim();

  try {
    input = JSON.parse(input);

    if (!Array.isArray(input) || !Array.isArray(input[0])) {
      throw new Error("Invalid matrix format");
    }

    let transposed = transposeMatrix(input);

    div.textContent = JSON.stringify(transposed, null, 2);
  } catch (error) {
    console.log(error);
    div.textContent = "Invalid input. Please enter a valid JSON array.";
  }
});
