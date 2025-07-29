function findPrimes() {
  const start = parseInt(document.getElementById("start").value);
  const end = parseInt(document.getElementById("end").value);
  const resultElement = document.getElementById("result");
  let primes = "";

  if (end < start) {
    resultElement.innerHTML = "Error: End number cannot be less than the start number.";
    return; 
  }

  for (let i = start; i <= end; i++) {
    let isPrime = true;

    if (i < 2) continue;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes += i + " ";
    }
  }

  document.getElementById("result").innerHTML = "Prime numbers: " + primes;
}
