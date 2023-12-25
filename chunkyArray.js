function chunkArrayInGroups(arr, size) {
  let new_arr = arr.slice();
  let final_arr = [];
  do {
      final_arr.push(new_arr.splice(0, size));
  } while (final_arr.length < (arr.length / size))
  return final_arr;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
