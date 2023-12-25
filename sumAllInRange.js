function returnNumbersInBetween(arr) {
  let org_arr = [...arr];
  let newArr = [];

  if (org_arr[0] < org_arr[1]) {
    for (let i = org_arr[0]; i <= org_arr[1]; i++) {
      newArr.push(i);
    }
  } else {
    for (let i = org_arr[0]; i >= org_arr[1]; i--) {
      newArr.push(i);
    }``
  }
  return newArr.reduce((sum, value) => sum + value, 0);
}

returnNumbersInBetween([5, 10]);
console.log(returnNumbersInBetween([1, 4]));
