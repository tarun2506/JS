// change everything below to the newer Javascript!

// let + const
let a = 'test';
let b = true;
const c = 789;
a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const firstName = person.firstName;
const lastName = person.lastName;
let age = person.age;
let eyeColor = person.eyeColor;

const {firstName, lastName} = person;
let {age, eyeColor} = person;



// Object properties
let a = 'test';
let b = true;
let c = 789;

const okObj = {
 a,
 b,
 c
};

const firstname = 'Tarun';
const city = 'Delhi';

// Template string:

let message = `Hello ${firstname} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
function isValidAge(age = 10) {
    return age
}



// Symbol
// Create a symbol: "This is my first Symbol"
let symboll = Symbol("This is my first symbol");


// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => whereAmI(username, location) ? "I am not lost" : "I am totally lost"