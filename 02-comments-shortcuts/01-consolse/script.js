//This is a single line comment

/*
This is a 
multi-line comment
*/

console.log("Hello, World!");

console.log(100)

console.log(10, 'hello', true)

const x = 10;

console.log(x);

console.error('Alert');

console.warn('Warning');

console.table({name: 'John', age: 30});

console.group('My Group');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd('My Group');

const styles = 'padding; 10px; background-color: white; color: red;'
console.log('%c This is a styled message', styles);