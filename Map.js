
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


const theNumbers = [4, 8, 15, 16, 23, 42];
//create a new array of objects with the properties
// value and index

const valueAndIndex = theNumbers.map(( value,index) => {
    return {
        value,
        index
    }
});

console.log(valueAndIndex);



//
const starter = [2, 5, 10];
// create a new array with each value multiplied by
// the next value
// the last value should be multiplied by the first value
// e.g. [2*5, 5*10, 10*2] == [10, 50, 20]

const multipliedByNext = starter.map((number,index,array) => {
   let nextIndex = index + 1;
   if(index == array.length -1){
      nextIndex = 0;
   }
   return number * array[nextIndex];
}) 

console.log(multipliedByNext);

// [ 10, 50, 20 ]



//foods example:

const foods = ['chicken', 'corn'];

const cookedFoods = foods.map((food) => {
    if(food == 'chicken') {
        return 'chickenLeg'
    }else {
        return 'popCorn'
    }
});

console.log(cookedFoods)

// [ 'chickenLeg', 'popCorn' ]


// 

const coolNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const multipliedBy5 = coolNumbers.map((number) => {
//    return number  * 5 ;
// });

const multipliedBy5 = coolNumbers.map(number => number * 5);


console.log(multipliedBy5);