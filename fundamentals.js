// 1. How to declare a variable using let and const
const fatherName = 'Rahman';
let season = 'rainy';
season = 'summer';

// 2. conditions
// 6 basic conditions: <, >, ===, !==, <=, >=
// Multiple conditions: &&, ||

if(fatherName === 'rahman' || season === 'rainy'){

}
else if(fatherName === 'Rahman'){

}
else{

}

// 3. array
// index
// length, push
const numbers = [23, 34, 43, 53, 11];
numbers[0] = 20;

// 4. loop
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// 5. function
function sum(num1, num2){
    const result = num1 + num2;
    return result;
}
const output = sum(12, 15);

// 6. object
// 3 ways to access property by name
const user = {
    name: 'Osman',
    age: 23,
    roll: 11,
    address: 'Balaram Hat',
    hobby: ['Coding', 'Travel', 'Sleeping'],
}

const myVariable = 'age';

console.log(user.name); // direct by property
console.log(user['age']); // access via property name string
console.log(user[myVariable]); //access via property name in a variable
