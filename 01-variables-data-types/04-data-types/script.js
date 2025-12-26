/** 
 * Primitive Data Types:
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. Null
 * 5. Undefined
 * 6. Symbol
 * 7. BigInt
 * 
 * Reference Data Types:
 * 1. Object
 * 2. Array
 * 3. Function
 * 
 * JavaScript is dynamically typed language
 */
// String
const firstName = 'Felix';

console.log('First Name:', firstName, typeof firstName);

// Number
const age = 32;
const temp = 98.6;

// Boolean
const isActive = true;

// Null
const middleName = null; // typeof null = object (this is a known JS quirk)

// Undefined
let job; // default value is undefined
const address = undefined;

// Symbol
const id = Symbol('12345');

// BigInt
const bigNumber = BigInt(9007199254741991); // or 9007199254741991n

// Reference Data Types
const numbers = [1,2,3,4,5]; // Array
const person = {      // Object 
    name: 'Felix',
    age: 32
};

function sayHello() {   // Function
    console.log('Hello');
}
const output = sayHello;
console.log(output, typeof output);