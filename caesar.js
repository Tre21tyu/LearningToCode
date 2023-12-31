// Function to encrypt a str using the Caesar cipher
function rot13(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Check if the character is a letter
    if (char.match(/[a-z]/i)) {
      // Determine the case (uppercase or lowercase)
      let isUpperCase = char === char.toUpperCase();

      // Apply the shift to the character code
      let charCode = char.charCodeAt(0);
      charCode = (charCode - 65 + 13) % 26 + 65;

      // Convert back to a character and append to the result
      result += String.fromCharCode(charCode);

      // Preserve the case
      if (!isUpperCase) {
        result = result.toLowerCase();
      }
    } else {
      // If the character is not a letter, keep it unchanged
      result += char;
    }
  }

  return result;
}

console.log(rot13('hi'))
