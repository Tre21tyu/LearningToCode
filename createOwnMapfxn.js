Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    // Only change code above this line
    return newArray;
  };
  
  // Example usage
  const originalArray = [1, 2, 3, 4, 5];
  
  const resultArray = originalArray.myMap(function(num) {
    return num*num;
  });
  
  console.log(resultArray); // Output: [1, 2, 3, 4, 5]  