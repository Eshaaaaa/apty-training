function convertToSentence() {
  let input = document.getElementById("wordsInput").value;
  if (!input.trim()) {
    document.getElementById("result").innerText = "Please enter some words.";
    return;
  }
  let words = input.split(",").map((word) => word.trim());
  let sentence = words.join(" ");
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  document.getElementById("result").innerText = sentence;
}
