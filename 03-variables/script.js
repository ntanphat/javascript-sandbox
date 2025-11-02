// 3 ways to declare a variable in JavaScript
// var, let, const
let firstName = 'John';
let lastName = 'Doe';
console.log(firstName, lastName, age);
var age = 30;
console.log(age);

// Naming conventions
// only letters, numbers, _, $
// cannot start with a number

// Multiple-Word formating
// firstName (camelCase)
// first_name (underscore)
// FirstName (PascalCase)
// firstname (all lowercase) -- Not Recommended

//Re-assigning variables
age = 31;
console.log(age);

let score;
score = 100;
if (true) {
    sccore = score + 50;
}
console.log(score);

const x = 10;
// x = 100; // This will give an error - cannot re-assign a const variable
// const y; // This will give an error - const variable must be initialized

const arr = [1,2,3,4];
arr.push(5); // This is allowed - modifying the contents of the array
console.log(arr);

const person = {
    name: 'Felix'
}
person.name = 'Phat';
person.age = 32;
console.log(person);

// Declare multiple at once
let a, b, c;
const d=10, e=20, f=30;
console.log(a, b, c, d, e, f);

