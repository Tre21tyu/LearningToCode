// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function fibonacciIterative(n) {
  if (n == 0) { 
    return [0];
  }
  else if (n == 1) {
    return [0, 1];
  }
  else if (n >= 2) {
    let fib = [0, 1];
      for (let i = 2; i <= n; i++) {
        let next = fib[i - 1] + fib[i - 2];
        fib.push(next);
      }
    return fib;
  }
}

function sumFibs(n) {
  let fibList = fibonacciIterative(n);
  let oddList = fibList
    // .filter((num) => num <= n)
    // .filter((num) => num % 2 !== 0)
  return oddList
    // .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sumFibs(5));
