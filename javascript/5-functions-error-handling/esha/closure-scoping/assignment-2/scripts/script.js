function chooseDish(dish) {
  function chooseDrink(drink) {
    function chooseDessert(dessert) {
      return `You ordered ${dish} with ${drink} and a ${dessert} for dessert. Enjoy!`;
    }
    return chooseDessert;
  }
  return chooseDrink;
}

function showMeal() {
  const dish = document.getElementById("dish").value;
  const drink = document.getElementById("drink").value;
  const dessert = document.getElementById("dessert").value;

  const message = chooseDish(dish)(drink)(dessert);
  document.getElementById("output").innerText = message;
}
