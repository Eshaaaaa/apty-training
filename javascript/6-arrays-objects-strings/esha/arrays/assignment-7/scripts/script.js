function introduceUsers() {
  const input = document.getElementById("usersInput").value.trim();
  const list = document.getElementById("introductions");
  list.innerHTML = "";

  if (!input) {
    const li = document.createElement("li");
    li.textContent = "Please enter user data.";
    list.appendChild(li);
    return;
  }

  const users = input
    .split(",")
    .map((user) => {
      const [name, age] = user.split(":").map((item) => item.trim());
      if (!name || isNaN(age)) return null;
      return { name, age: parseInt(age) };
    })
    .filter((user) => user !== null);

  if (users.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No valid users found.";
    list.appendChild(li);
    return;
  }

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} is ${user.age} years old.`;
    list.appendChild(li);
  });
}
