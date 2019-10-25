// filter is a higher order function 
// filter should either return true or false
// it will return the array.array returned by 
// filter may not have the  same length like the 
// previous array

// forEach

let numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];
// let evenNumbers = [];

// numbers.forEach((number) => {
//     if(number % 2 == 0) {
//         evenNumbers.push(number);
//     }
// });


// filter()

// let evenNumbers = numbers.filter((number) => {
//     return number % 2 == 0;
// })


let evenNumbers = numbers.filter((number) => {
    if(number % 2 == 0) {
        return true;
    }else {
        return false;
    }
});


console.log(evenNumbers);
