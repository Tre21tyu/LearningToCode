function diffArray(arr1, arr2) {
    return [...arr1, ...arr2]
        .filter(num => arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
