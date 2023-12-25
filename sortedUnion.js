// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// Check the assertion tests for examples.

function uniteUnique(arr) {
  // Combine all arrays
  var combinedArray = [];
  
  // Loop through each argument (array) passed to the function
  for (var i = 0; i < arguments.length; i++) {
    // Concatenate the current array to the combinedArray
    combinedArray = combinedArray.concat(arguments[i]);
  }

  // Filter out duplicate elements using a Set
  var uniqueArray = Array.from(new Set(combinedArray));

  return uniqueArray;
}

// Example usage:
var result = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1]);
console.log(result);
