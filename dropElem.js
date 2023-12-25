function dropElements(arr, func) {
  let orgArr = [...arr];    
  let i = 0; 
  while (!func(arr[i])) {
    orgArr.shift(i);
    i++;
  }
  return orgArr
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; }));
