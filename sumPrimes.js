function generatePrimes(n) {
  if (n <= 0) {
    return [];
  }

  const primes = [];
  let currentNumber = 2;

  while (primes.length < n) {
    if (isPrime(currentNumber)) {
      primes.push(currentNumber);
    }
    currentNumber++;
  }

  return primes;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
function sumPrimes(n) {
  let listOPrimes = generatePrimes(n)
    .filter((item) => item <= n);
  return listOPrimes
    .reduce((previous, current) => previous + current , 0);
}


// Example usage:
const n = 10;
const primeNumbers = sumPrimes(n);
console.log(primeNumbers);
