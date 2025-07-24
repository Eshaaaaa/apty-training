function checkAge() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const ageInput = document.getElementById("age").value;

  const fullName = `${firstName} ${lastName}`;

  const age = parseInt(ageInput, 10);

  let message;

  message =
    age >= 18
      ? `Hello ${fullName} welcome to apty`
      : `Hello ${fullName} comeback after ${18 - age} years`;

  if (isNaN(age) || age < 0) {
    message = "Please enter a valid age.";
  }

  document.getElementById("result").innerText = message;
}
