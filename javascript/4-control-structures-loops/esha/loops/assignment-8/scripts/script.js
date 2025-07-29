const nameArt = [
  ["EEEE", " SSS ", "HH HH", "  A  "],
  ["E   ", "S    ", "HH HH", " A A "],
  ["EEE ", " SSS ", "HHHHH", "AAAAA"],
  ["E   ", "    S", "HH HH", "A   A"],
  ["EEEE", "SSSS ", "HH HH", "A   A"],
];

let result = "";

for (const row of nameArt) {
  for (const letter of row) {
    result += letter + "  ";
  }
  result += "\n";
}

console.log(result);
