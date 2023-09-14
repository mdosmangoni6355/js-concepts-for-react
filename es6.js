const numbers = [23, 34, 43, 53, 11];
const user = {
  name: "Osman",
  age: 23,
  roll: 11,
  address: "Balaram Hat",
  hobby: ["Coding", "Travel", "Sleeping"],
};

// 1. template string
const about = `My name is ${user.name} age of ${user.age} has numbers ${numbers[2]} also like hobbies ${user.hobby[0]}`;
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = (number) => number + 65;
const isEven = (x) => x % 2 == 0;
const addThree = (a, b, c) => a + b + c;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// 3. spread operator
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 67];

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
