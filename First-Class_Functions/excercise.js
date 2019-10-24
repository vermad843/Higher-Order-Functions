// A programming language is said to have first-class
// functions when functions in that language are treated 
// like any other variable.for ex : in such a 
// language,a function can be passed as an argument
// to other functions,can be returned by another 
// function and can be assigned as a value to a 
// variable

//
// define a function called getName that returns 
// your name as a string

// function getName() {
//     console.log("vishnu");
// }
// getName();

// let getName = () => {
//     console.log("vishnu");
// }

// getName();

// let getName = () =>  {
//     return 'vishnu';
// }
// console.log(getName());

//one liner

let getName = () =>   'vishnu';

console.log(getName());


// 
/*
define a function called greet that takes in 2 params:
getNameFn - a function that returns your name
greeting - a string greeting, e.g. 'Hello,Goodbye,etc.
the function should log `some greeting,your-name-here`
by invoking the getNameFn
invoke your function several times with different 
greetings
*/
// getName is a function you mentioned above:

function greet(getNameFn,greeting) {
  console.log(greeting,getNameFn());
}

greet(getName,'Hello');
//hello vishnu 








