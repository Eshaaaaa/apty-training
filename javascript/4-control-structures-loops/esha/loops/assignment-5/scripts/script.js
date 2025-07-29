function countCharacters() {
  const str = document.getElementById("inputText").value;
  const freq = {};

  for (let i in str) {
    const char = str[i];
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  let result = "Character Frequencies:<br>";
  for (let key in freq) {
    result += `${key} = ${freq[key]}<br>`;
  }

  document.getElementById("output").innerHTML = result;
}
