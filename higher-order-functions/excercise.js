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


flavors.forEach((flavor, i) => {
console.log(`I like ${flavor} cake`) 
})

// I like chocolate cake
// I like ginger cake
// I like carrot cake
// I like coffee cake
// I like walnut cake
// I like banana cake