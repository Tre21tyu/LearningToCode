function addTogether() {
  const [first, second] = arguments;

  if (typeof (first) === "number") {
    if (typeof (second) === "number") return first + second;
    if (arguments.length === 1) return (second) => addTogether(first, second);
  }
}

console.log(addTogether(2,3));
var addTwo = addTogether(2);
console.log(addTwo(2));
console.log(addTogether(1)(2));
