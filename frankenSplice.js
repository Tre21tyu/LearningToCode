function frankenSplice(arr1, arr2, n) {
    let arr3 = arr2.slice(0, n);
    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i]);
    }
    let end = (arr2.slice(n, arr2.length));
    for (let i = 0; i < end.length; i++) {
        arr3.push(end[i]);
    }
    arr2 = arr3;
    return arr2;
  }

frankenSplice([1, 2, 3], [4, 5, 6], 1);