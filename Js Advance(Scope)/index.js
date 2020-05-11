// Scope
// Root Scope (Window)
var fun = 5; 
function funfunction(){
    // child scope
    var fun = "hello";
    console.log(1, fun); 
}

function funerfunction(){
    // child scope
    var fun = "byee";
    console.log(2, fun); 
}

function funestfunction(){
    // child scope
    var fun = "hehehehe";
    console.log(3, fun); 
}

console.log("window", fun);
funfunction();
funerfunction();
funestfunction();
console.log(funestfunction);