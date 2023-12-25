function mutation(arr) {
  const test_1 = arr[0].toLowerCase();
  const test_2 = arr[1].toLowerCase();
  let found_count = 0;
  let let_all_found = [];

  for (let i = 0; i < test_1.length; i++) {
    let found = false;
    let already_found = false;
    for (let j = 0; j < test_2.length; j++) {
      if (test_1[i] == test_2[j]) {
        if (test_1[i] in let_all_found) {
          already_found = true;
        }
      } else if (test_1[i] == test_2[j] && !already_found) {
        found = true;
        found_count++;
        let_all_found.push(test_1[i]);
        break;
      }
    }
    if (found_count == test_2.length) {
      return true;
    } else {
      return false;
    }
  }
}

// mutation(["hello", "hey"]);
console.log(mutation(["floor", "for"]));
