/*
The Accumulator Pattern 

A common programming "pattern" is to iterate over
an array,accumulating a value as we go. This pattern
is commonly used to sum the numbers in an array,
or to build a new array based on existing array.

 3 parts of the accumulator pattern: 

1. initialize an 'accumulator' variable to an initial
   value
2. iterating over an array
3. updating the accumulator variable on each iteration
*/

// example : 


let number_1 = [1, 2, 3, 4, 5];
let sum = 0; //Initialize accumulator variable

// Iterate over the array
// for (let i = 0; i < number_1.length; i++) {
//     const number = number_1[i];
//     sum+=number;//update the accumulator variable
// }


// forEach 

// number_1.forEach((number) => {
//     sum+=number;
// })


number_1.forEach(number =>sum+=number);
console.log(sum);//15


// Re-write the for loop with a forEach

let things = ['shoe',
              'table',
              'book',
              'computer',
              'phone'];
let copiedThings = [];

// for (let i = 0; i < things.length; i++) {
//     const thing = things[i];
//     copiedThings.push(thing);
// }


// forEach

things.forEach((thing) => {
    copiedThings.push(thing);
})

console.log(copiedThings);

