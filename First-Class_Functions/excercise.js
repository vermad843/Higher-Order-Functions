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

let getName = () => {
    console.log("vishnu");
}

getName();