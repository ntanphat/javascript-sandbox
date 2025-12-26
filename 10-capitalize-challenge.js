const myString = 'capitalize'
let x = myString.replace(myString.charAt(0),myString.charAt(0).toUpperCase());
x;

x = myString[0].toUpperCase() + myString.slice(1);
x;

x = `${myString[0].toUpperCase()}${myString.substring(1)}`
x;
// for (let i=1; i < myString.length; i++){
//     //console.log(myString.charAt(i+1));
//     if (myString.charAt(i) === ' ' && myString.charAt(i+1) !== ''){
//         myString.charAt(i+1) = myString.charAt(i+1).toUpperCase();
//         x = myString;
//     }
//     x
// }