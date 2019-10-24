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


// numbers.forEach((number) => {
//     console.log(number);
// })


// one liner :

numbers.forEach((number) => console.log(number));



// convert the following for loops to a forEach 


// create the array 

const flavors = ['chocolate',
                  'ginger',
                  'carrot',
                  'coffee',
                  'walnut',
                  'banana'];
                
for (let i = 0; i <flavors.length; i++) {
    console.log('I like ' + flavors[i] + ' cake');
}


// flavors.forEach((flavor, i) => {
// console.log(`I like ${flavor} cake`) 
// })


flavors.forEach(flavor => console.log(`I like ${flavor} cake`));
// I like chocolate cake
// I like ginger cake
// I like carrot cake
// I like coffee cake
// I like walnut cake
// I like banana cake



// 
const numbers1 = [2, 4, 6, 8];

for (let i = 0; i < numbers1.length; i++) {
    console.log('The number', numbers1[i], 'is at index', i);
}

// numbers1.forEach((number1,i) => {
//     console.log(`The number ${number1} is at index ${i} `)
// })

numbers1.forEach((number1, i )=> console.log(`The number ${number1} is at index ${i} `));

// The number 2 is at index 0
// The number 4 is at index 1
// The number 6 is at index 2
// The number 8 is at index 3


// 

const evenNumbers = [2, 4, 6, 8, 10];

for (let i = 0; i < evenNumbers.length; i++) {
     evenNumbers[i] = evenNumbers[i] * 2;
}

console.log(evenNumbers);


// forEach

// evenNumbers.forEach((number) => {
//     return number * 2;
// })

// console.log(evenNumbers);

// one liner :

evenNumbers.forEach(number => number * 2 );
console.log(evenNumbers);

