// let + const 

const Player = "bobby";
let experience = 100;
let wizardlvl = false;

if (experience > 90){
    let wizardlvl = true;
    console.log("inside", wizardlvl);
}

console.log("outside", wizardlvl);


// Destructuring:


const obj = {
    player: "Tarun",
    experience: 100,
    wizardlvl: false
}

const player = obj.player;
const experience = obj.experience;
let wizardlvl = obj.wizardlvl;

const {player, experience} = obj;
let {wizardlvl} = obj;

//Object properties:


const name = "adam smith"
const obj = {
   [name]: "hello",
   ["ray" + "smith"]: "hehe"
}




const a = "tarun";
const b = true;
const c = {};


const obj = {
 a,
 b,
 c
}

// Template Strings:
const Name = "Tarun";
const age = 34;
const pet = "Dog";

// const greeting = "Hello " + name + " you seems to be doing" + greeting + "!";

const greetingBest = `Hello ${name} you seems to be ${age-10}. What a lovely ${pet} you have`;


// Default arguments:

function greet(name = "", age = 30, pet = "cat"){
    return `Hello ${name} you seems to be ${age-10}. What a lovely ${pet} you have`;
}

// Symbol datatype:
let sym1 = Symbol();
let sym2 = Symbol("dsdsd");
let sym3 = Symbol("dsdsd");


// Arrow Functions: 

function add(a, b){
    return a + b;
}

const add2 = (a, b) => a + b;