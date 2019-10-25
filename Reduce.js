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






// const days = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday'
// ];

