const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!username || !email) {
    e.preventDefault();
    alert("Please fill in all fields.");
  }
});
