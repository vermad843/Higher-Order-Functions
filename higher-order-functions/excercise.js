//higher order functions are functions 
// that take in a function as
// an argument ,or return a function as a result.


//forEach() is a higher order function 
// for Loops  can be replaced with forEach. 

const numbers = [1, 2, 3, 4, 5];

// log all the numbers in the array

// with a for loop 

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
  console.log(number);  
}


numbers.forEach((number) => {
    console.log(number);
})