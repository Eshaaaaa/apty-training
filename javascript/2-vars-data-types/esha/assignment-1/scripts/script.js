document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("#myBtn");
  btn.addEventListener("click", function () {
    alert("External JS: Button clicked!");
  });
});
