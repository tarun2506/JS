// const num = 3;
// function multiplyBy2(inputNumber){
//     const result = inputNumber*2;
//     return result;
// }

// const output = multiplyBy2(num);
// const newOutput = multiplyBy2(10);


// function tenSquare(){
//     return 10*10;
// }  
// tenSquare();


// function nineSquare(){
//     return 9*9;
// }

// nineSquare();

// function SquareNum(num){
//     return num*num;
// }

// SquareNum(9);
// SquareNum(8);


// function copyArrayAndMultiplyBy2(array){
//     const output = [];
//     for (let i = 0; i < array.length; i++){
//         output.push(array[i] * 2); 
//     }
//     return output;
// }

// const myArray = [1,2,3];
// const result = copyArrayAndMultiplyBy2(myArray);


// function copyArrayAndDivideBy2(array){
//     const output = [];
//     for (let i = 0; i < array.length; i++){
//         output.push(array[i] / 2); 
//     }   
//     return output;
// }

// const myArray = [1,2,3];
// const result = copyArrayAndDivideBy2(myArray);




// function copyArrayAndManipulate(array, instructions){
//     const output = [];
//     for (let i = 0; i < array.length; i++){
//         output.push(instructions(array[i]));
//     }
//     return output;
// }

// function multiplyBy2(input) {
//     return input*2;
// }

// const result = copyArrayAndManipulate([1,2,3], multiplyBy2);


function multiplyBy2(input) { return input*2; }

// or

const multiplyBy2 = (input) => {return input*2;}

// or

const multiplyBy2 = (input) =>  input*2;

// or

const multiplyBy2 = input => input*2;

const output = multiplyBy2(3);

