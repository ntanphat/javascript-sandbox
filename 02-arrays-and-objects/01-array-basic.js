let x;
const numbers = [11, 15, 16, 20, 5, 100];
const mixed = [12, 'Hello', true, null];

const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];
x;

x = numbers[0] + numbers[3];
x;

x = `My favorite fruit is an ${fruits[0]}`
x;

x = numbers.length;
x;

fruits[2] = 'pear';
fruits;

fruits[3] = 'strawberry'
fruits;

fruits[fruits.length] = 'blueberry'
fruits[fruits.length] = 'peach'

fruits;
