// String to number
let amount = '100';

// amount = Number(amount);
// amount = parseInt(amount);
amount = +amount;

console.log(amount, typeof amount);

// Number to string
let score = 50;
// score = String(score);
score = score.toString();

console.log(score, typeof score);

// String to decimal number
let price = '99.99';
price = parseFloat(price);

console.log(price, typeof price);

// Nummber to boolean
let isActive = 1;
isActive = Boolean(isActive);
// isActive = !!isActive;

console.log(isActive, typeof isActive);

// NaN - Not a Number
let value = 'hello';
value = Number(value);
console.log(Math.sqrt(-1));
console.log('foo' / 3);
console.log(undefined + 5);

console.log(value, typeof value);