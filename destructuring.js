// 1. array destructuring 
const numbers = [25, 45];
// const a = numbers[0];
// const b = numbers[1];

// const [a, b] = [25, 45];
const [a, b] = numbers;
function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}
boxify(34, 78);
// console.log(a, b);

const user = {
    name: "Osman",
    age: 23,
    roll: 11,
    address: "Balaram Hat",
    hobby: ["Coding", "Travel", "Sleeping"],
  };

const [user1, user2] = user.hobby;
console.log(user);


// 2. object destructuring
const {name1, name2} = {name: 'akib', age: 23};

const employee = {
    ide: 'vs code',
    designation: 'developer',
    machine: 'Linux',
    language: ['HTML', 'CSS', 'JS'],
    specification: {
        height: 66,
        weight: 70,
        address: 'Panchagarh',
        drink: 'water',
        watch: {
            color: 'silver',
            price: 2200,
            brand: 'Casio'
        }
    }
}
const {machine, ide} = employee;
const {height, weight} = employee.specification;
const {color, brand} = employee?.specification?.watch;

