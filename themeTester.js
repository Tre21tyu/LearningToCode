// Variables and Data Types
const name = "John";
let age = 30;
var country = "USA";

// Functions
function greet(person) {
  return `Hello, ${person}!`;
}

// Objects and Properties
const person = {
  name: "Alice",
  age: 25,
};

// Arrays
const numbers = [1, 2, 3, 4, 5];

// Conditional Statements
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Loops
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// String manipulation
const sentence = `My name is ${name}, and I'm ${age} years old.`;

// ES6 Features
const arrowFunction = (x) => x * 2;
const square = (x) => {
  return x * x;
};

// Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Async operation here
    if (/* async operation succeeds */) {
      resolve("Data received successfully");
    } else {
      reject("Error: Data retrieval failed");
    }
  });
};

// Template Literals
const message = `Today is ${new Date().toDateString()}`;

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

// Error Handling
try {
  // Code that might throw an error
  throw new Error("This is an error message");
} catch (error) {
  console.error(error);
}
