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

let evenNumbers = numbers.filter((number) => {
    return number % 2 == 0;
})


// let evenNumbers = numbers.filter((number) => {
//     if(number % 2 == 0) {
//         return true;
//     }else {
//         return false;
//     }
// });

// const isEven = (number) => {
//     return number % 2 == 0;
// };

// let evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);



// 

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

// create a new array with only the days start with
// the letter T 

// daysStartWithT = days.filter((day) => {
//   return day[0] == 'T';
// });


// dayStartWithT = days.filter((day) => {
//     return day.charAt(0) == 'T';
//   });


// one liner :

dayStartWithT = days.filter(day =>  day.charAt(0) == 'T' );


console.log(dayStartWithT);


// 
// create a new array with only the people who's
// first name is less then and equal to 4 characters:

const people = [{
    first_name: 'CJ',
    last_name : 'R.'
}, {
    first_name: 'Brendan',
    last_name : 'Eich' 
}, {
    first_name: 'Kyle',
    last_name : 'Simpson'
}, {
    first_name: 'Douglas',
    last_name : 'Crockford'
}];

// const nameLessThanFourLetters = people.filter((person) => {
//    return person.first_name.length <= 4
// }) ;

const nameLessThanFourLetters = people.filter(person =>person.first_name.length <= 4);

console.log(nameLessThanFourLetters);


// 
// create a new array with only the animals of 
// size small : 

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
  name : 'cat',
  size : 'elephant'
}];

// const sizeSmall = animals.filter((animal) => {
//     return animal.size == 'small';
// });

// one liner :

const sizeSmall = animals.filter(animal => animal.size == 'small');

console.log(sizeSmall)



// 
// create a new array with only the words with a 
// length longer than 6 


const words = ['spray',
               'limit',
               'elite',
               'exuberant',
               'destruction',
               'present'];

// const lengthLongerThanSix = words.filter((word) => {
//   return word.length > 6
// });

const lengthLongerThanSix = words.filter(word =>  word.length > 6 );



console.log(lengthLongerThanSix);

// [ 'exuberant', 'destruction', 'present' ]


const generes = ['jazz', 
                 'metal-core',
                 'punk',
                 'ska-core',
                 'vaporwave',
                 'country-core'];

// const endWithCore = generes.filter((gener) => {
//   return gener.includes('-core');
// });
// const endWithCore = generes.filter(gener => gener.includes('-core'));

const endWithCore = generes.filter(gener => gener.indexOf('core') != -1)



console.log(endWithCore);

// [ 'metal-core', 'ska-core', 'country-core' ] 
