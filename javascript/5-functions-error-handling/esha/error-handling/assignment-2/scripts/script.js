const userRecords = {
  Esha: { address: { city: "Hyderabad" } },
  Resha: { address: { city: "Mumbai" } },
  Saisha: { address: { city: "Chennai" } },
};

function showCity() {
  const inputName = document.getElementById("username").value.trim();
  const resultBox = document.getElementById("displayResult");

  try {
    const userCity = userRecords[inputName].address.city;
    resultBox.textContent = `${inputName} lives in ${userCity}.`;
  } catch (err) {
    resultBox.textContent = `User "${inputName}" not found or data is missing.`;
  }
}
