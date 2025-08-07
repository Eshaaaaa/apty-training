function generateGreeting() {
  const name = document.getElementById("nameInput").value;
  const age = document.getElementById("ageInput").value;

  const message = `Hello, my name is ${name} and I am ${age} years old.`;

  document.getElementById("output").innerText = message;
}
