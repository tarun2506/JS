//#1 change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }
function winBattle(bool){
    return bool;
}
var experiencePoints = winBattle() ? "10" : "1"; 

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
// it will return undefinerd;

//#3 return value when moveCommand("back");
// it will return you arrived home;

//#4 return value when moveCommand("right");
// it will return you found a river;

//#5 return value when moveCommand("left");
// it will return undefined;

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

// Self made switch program:

// function movements(keypress){
//     var key;
//     switch (keypress){
//         case "Spacebar":
//             key = "jumpppppp";
//             break;
//         case "Enter":
//             key = "Opening the door";
//             break;
//         case "w":
//             key = "Moving forward";
//             break;
//         case "a":
//             key = "Moving left";
//             break;
//         case "s":
//             key = "Moving backward";
//             break;
//         case "d": 
//             key = "Moving right";
//             break;
//         default:
//             key = "Gay, at least press a key!";    
//             break;
//     }
//     return key;
// }