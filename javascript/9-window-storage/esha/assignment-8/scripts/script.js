const localDataSpan = document.getElementById("localData");
const sessionDataSpan = document.getElementById("sessionData");

window.onload = () => {
  localDataSpan.textContent =
    localStorage.getItem("localData") || "No data in LocalStorage";
  sessionDataSpan.textContent =
    sessionStorage.getItem("sessionData") || "No data in SessionStorage";
};

document.getElementById("saveLocalBtn").addEventListener("click", () => {
  const value = document.getElementById("localInput").value;
  localStorage.setItem("localData", value);
  localDataSpan.textContent = value;
});

document.getElementById("saveSessionBtn").addEventListener("click", () => {
  const value = document.getElementById("sessionInput").value;
  sessionStorage.setItem("sessionData", value);
  sessionDataSpan.textContent = value;
});
