function palindrome(str) {
  var resultString = str
  .replace(/[^a-zA-Z0-9]/gi, '')
  .toLowerCase();
  return resultString === resultString
    .split('')
    .reverse()
    .join('')
}

console.log(palindrome("RaceCar"));
