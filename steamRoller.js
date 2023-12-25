function flattenArray(arr) {
  let flattened = [];

  function flattenHelper(subArray) {
    for (let i = 0; i < subArray.length; i++) {
      if (Array.isArray(subArray[i])) {
        flattenHelper(subArray[i]);
      } else {
        flattened.push(subArray[i]);
      }
    }
  }

  flattenHelper(arr);
  return flattened;
}

const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = flattenArray(nestedArray);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
