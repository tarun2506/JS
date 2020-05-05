var database = [
    {
        username: "Tarun",
        password: "passwor0"
    },
    {
        username: "Varun",
        password: "passwor1"
    },
    {
        username: "Karun",
        password: "passwor3"
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
    },
    {
        username: "Bobby",
        timeline: "Javascript is fun!"
    }
];

var username = prompt("What\'s your username?");
var password = prompt("What\'s your password?");

function signIn(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (username === database[i].username) {
            if (password === database[i].password) {
                alert('Logged in');
            } else {
                alert('Incorrect password')
            }
            return;
        }
    }
    alert('User not found');
}

signIn(username, password)