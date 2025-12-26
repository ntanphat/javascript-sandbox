// values are stored in stack
const name = 'John';
const age = 30;

// reference values are stored in heap
const person = {
    name: 'Felix',
    age: 40
};

let newName = name; // copy by value
newName = 'Johnathan';

let newPerson = person; // copy by reference
newPerson.name = 'Felix Jr.';

console.log(name, newName); // John, Johnathan
console.log(person, newPerson); // Felix Jr., Felix Jr.