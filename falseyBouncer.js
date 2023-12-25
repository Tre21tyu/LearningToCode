function bouncer(arr) {
    let new_arr = arr.slice();
    const noFalsey = new_arr.filter(item => Boolean(item))
    return noFalsey;
  }

console.log(bouncer([7, "ate", "", false, 9]));