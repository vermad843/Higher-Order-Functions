//  reduce() method applies a function against
// an accumulator and each element in the 
// array(from left to right) to reduce it to
//  a single value.reduce is a higher order function
// 
// will return a single value:


// let numbers = [1, 2, 3, 4, 5];

// //sum will be the previously returned accumulator
// let sum = numbers.reduce((sum, number) => {
//   sum += number;  //update the accumulator variable
//   return sum;   //always return accumulator
// }, 0); //initialize accumulator variable

// console.log(sum);

// in reduce it takes one more parameter called
// Accumulator ;

// create a number that is the sum of all the numbers
// in the array

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((sum, number) => { //Accumulator as a parameter(1)
   sum+=number;    //update the Accumulator Variable (4)        
  return sum;    //return Accumulator(3)
}, 0);    //Initialize Accumulator == 0(2)

console.log(sum);

// see Above 

// Accumulator as a parameter
// Initialize Accumulator == 0
//  return Accumulator 
// update the accumulator variable





