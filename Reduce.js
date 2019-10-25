//  reduce() method applies a function against
// an accumulator and each element in the 
// array(from left to right) to reduce it to
//  a single value.reduce is a higher order function
// 
// will return a single value:


let numbers = [1, 2, 3, 4, 5];

//sum will be the previously returned accumulator
let sum = numbers.reduce((sum, number) => {
  sum += number;  //update the accumulator variable
  return sum;   //always return accumulator
}, 0); //initialize accumulator variable

console.log(sum);