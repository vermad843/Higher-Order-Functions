
// map is a higher order function on the Array prototype.
//this means we can call .map() on any array we create.


const numbers = [1 ,2, 3];

const result = numbers.map(number => {
    return number * 2;
})

console.log(result);
// expected output : [2 ,4, 6]


// When should you use a map?

// 1. when you want to create a new array of the same 
//    length as the original array.

//2. when you want to transform an array of 1 thing into 
// an array of another thing(doubling the array ).


// qestions:

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

//create a new array with the first 3 letter of each day

const firstThreeLetters = days.map((day) => {
  return day.substring(0,3);
});
//substring does not depend on indexing;
console.log(firstThreeLetters);

// expected output :[ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]



const people = [{
   first_name : 'Vishnu',
   last_name : 'Verma', 
}, {
   first_name : 'Logan',
   last_name : 'Verma', 
}, {
   first_name : 'Jane',
   last_name : 'Verma', 
}, {
   first_name : 'XYZ',
   last_name : 'Verma', 
}];

//create a new array with the string full name of 
// each person 


// const fullName = people.map((person) => {
//     return person.first_name + ' ' + person.last_name;
// })

// console.log(fullName);


const fullName = people.map((person) => {
    return `${person.first_name} ${person.last_name}`;
})

console.log(fullName);

// [ 'Vishnu Verma', 'Logan Verma', 'Jane Verma', 'XYZ Verma' ]



const animals = [{
   'name' : 'cat',
   'size' : 'small'
}, {
   'name' : 'dog',
   'size' : 'small'
}, {
   'name' : 'lion',
   'size' : 'medium'
}, {
   'name' : 'elephant',
   'size' : 'big'
}];

// create a new array with just the names of the 
// animals


animalNames = animals.map((animal) => {
    return animal.name;
})

console.log(animalNames);
// [ 'cat', 'dog', 'lion', 'elephant' ]