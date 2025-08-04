const userList = {
  Esha: { address: { city: "Hyderabad" } },
  Resha: { address: { city: "Mumbai" } },
  Saisha: { address: { city: "Chennai" } },
};

const default_city = "Pune";

function findCity() {
  const name = document.getElementById("username").value.trim();
  const display = document.getElementById("result");
  let foundCity = null;

  display.textContent = "";

  try {
    foundCity = userList[name].address.city;
    display.textContent = `✅ ${name}'s city is ${foundCity}`;
  } catch (e) {
    display.textContent = `❌ Error: Could not find city for "${name}".`;
  } finally {
    if (!foundCity) {
      display.textContent += ` Showing default city: ${default_city}`;
    }
  }
}
