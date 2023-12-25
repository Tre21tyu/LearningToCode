// Brute force caveman i dumb and don't know math approach
// Brute force caveman i dumb and don't know math approach
  function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let nums = [];
  for (let i = min; i <= max; i++) {
    nums.push(i);
  }

  let temp_max = 0;

  while (!found) {
    temp_max += max; // Increment by the largest number to narrow down the search space

    if (temp_max % max === 0) {
      let count = 0;

      for (let i = min; i <= max; i++) {
        if (temp_max % i === 0) {
          count++;
        }
      }

      if (count === nums.length) {
        found = true;
      }
    }
  }

  return temp_max;
}

console.log(smallestCommons([1, 5]));
