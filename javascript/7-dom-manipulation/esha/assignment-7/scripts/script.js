let currentIndex = 1; 

function toggleDivs() {
  const divs = document.querySelectorAll(".box"); 
  
  divs.forEach((div) => {
    div.classList.add("hidden");
  });

  divs[currentIndex].classList.remove("hidden");

  currentIndex = (currentIndex + 1) % divs.length;
}
