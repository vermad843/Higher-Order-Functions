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
// 15

// see Above 

// Accumulator as a parameter
// Initialize Accumulator == 0
//  return Accumulator 
// update the accumulator variable


// 
// create an object with the fruit as a key and the 
// number of occurences of that fruit as a 
// variable

const fruits = ['banana',
                'cherry',
                'orange',
                'apple',
                'cherry',
                'orange',
                'apple',
                'banana',
                'cherry',
                'orange',
                'fig'];

const fruitStock = fruits.reduce((fruitStock,fruit) => {//fruitStock is a accumulator 
    if(fruitStock.hasOwnProperty(fruit)) {   //updating the Accumulator
     fruitStock[fruit]++;
    }else {                       //if it does not already have a property called fruit then do this  
     fruitStock[fruit] = 1;
    }
    return fruitStock;                //return Accumulator                            
}, {}); //initialize the accumulator as an empty object

console.log(fruitStock);


// hasOwnProperty checks wheather the current property exist in the object or not


// 

// create a number that is the average price 
// of all the prices in the array 
// hint : you will need to check the index to 
// determine if you should return the sum or 
// the average

// const prices = [29.76, 41.85, 46.5];

// const averagePrice = prices.reduce((averagePrice, price,index, array) => {
   
//   const newAverage = averagePrice + price / array.length;
//   return newAverage;  
// }, 0);

// console.log(averagePrice);
// // 39.370000000000005


const prices = [29.76, 41.85, 46.5];

const sum1 = prices.reduce((sum1, price) => {
  sum1+=price;
  return sum1 ;
}, 0);
console.log(sum1 / prices.length);




//create a new array with the first 3 letters of each day

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const shorten = days.reduce((shorten, day) => {
  const short  = day.substring(0,3);  
  shorten.push(short);
  return shorten
}, []);

console.log(shorten);


// 
// create a new array with only the words with a 
// length longer than 6 

const words = ['spray',
               'limit',
               'elite',
               'exuberant',
               'destruction',
               'present'];

const moreThanSix = words.reduce((six,word) => {
  if(word.length > 6) {
    six.push(word);
  }
  return six;
}, []);

console.log(moreThanSix);



// 
// create an object where the keys are the id
// and the values are the people 
// {1 :{people},2 :{people},3 :{people},4 :{people}}

const people = [{
   id : 1,
   first_name : 'Vishnu',
   last_name : 'Verma'
}, {
  id : 2,
  first_name : 'Logan',
  last_name : 'Verma'
}, {
  id : 3,
  first_name : 'Deepak',
  last_name : 'Verma'
}, {
  id :  4,
  first_name : 'Dk',
  last_name : 'Verma'
}];


const peopleById = people.reduce((byId, person) => {
 byId[person.id] = person;                
  return byId;
}, {});

console.log(peopleById);


// { '1': { id: 1, first_name: 'Vishnu', last_name: 'Verma' },
//   '2': { id: 2, first_name: 'Logan', last_name: 'Verma' },
//   '3': { id: 3, first_name: 'Deepak', last_name: 'Verma' },
//   '4': { id: 4, first_name: 'Dk', last_name: 'Verma' } }




// 
// create an object where the keys are the size
// and the size and the values are an array of all 
// animals that size

const animals = [{
  name : 'cat',
  size : 'small'
}, {
  name : 'dog',
  size : 'small'
}, {
  name : 'lion',
  size : 'medium'
}, {
  name : 'elephant',
  size : 'big'
}];


const animalsBySize = animals.reduce((bySize,animal) => {
   if(!bySize.hasOwnProperty(animal.size)) {
    bySize[animal.size] = [];
   } 
   bySize[animal.size].push(animal);
  return bySize;
}, {});

console.log(animalsBySize);


// { small:
//   [ { name: 'cat', size: 'small' },
//     { name: 'dog', size: 'small' } ],
//  medium: [ { name: 'lion', size: 'medium' } ],
// //  big: [ { name: 'elephant', size: 'big' } ] }