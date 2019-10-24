
// map is a higher order function on the Array prototype.
//this means we can call .map() on any array we create.


const numbers = [1 ,2, 3];

const result = numbers.map(number => {
    return number * 2;
})

console.log(result);
// expected output : [2 ,4, 6]

