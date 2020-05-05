var database = [
    {
        username: "Tarun",
        password: "passwor0"
    }
];

var newsfeed = [
    {
        username: "Jhon",
        timeline: "Javascript is preeetyy cool!"
    },
    {
        username: "Michal",
        timeline: "Javascript is sooooooooo cooool!"
    }
];

var userName = prompt("Whats your username?");
var password = prompt("Whats your password?");

function signIn(username, pass){
    if (username === database[0].username && pass === database[0].password){
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username or password!");
    }
}

signIn(userName, password)