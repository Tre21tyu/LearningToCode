const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < 3; i++) {
      const add_ = `<li class="text-warning">${arr[i]}</li>`;
      failureItems.push(add_);
    }
    // Only change code above this line
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(failuresList);