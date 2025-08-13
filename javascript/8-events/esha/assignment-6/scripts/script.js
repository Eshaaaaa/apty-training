const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

username.addEventListener("input", () => {
  if (username.value.trim().length < 4) {
    usernameError.textContent = "Username must be at least 4 characters";
  } else {
    usernameError.textContent = "";
  }
});

email.addEventListener("input", () => {
  if (!email.value.includes("@") || !email.value.includes(".")) {
    emailError.textContent = "Enter a valid email address";
  } else {
    emailError.textContent = "";
  }
});

password.addEventListener("input", () => {
  const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
  if (
    password.value.trim().length < 6 ||
    !specialCharRegex.test(password.value)
  ) {
    passwordError.textContent =
      "Password must be at least 6 characters and contain a special character.";
  } else {
    passwordError.textContent = "";
  }
});
