var btn = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");

function inputLength(){
   return input.value.length;
}

function creatListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function abc(){
        if (inputLength() > 0){
            creatListElement();
        }      
}

function xyz(event){
        if (inputLength() > 0 && event.keyCode === 13){
            creatListElement();
        }
}


btn.addEventListener("click", abc);

input.addEventListener("keypress", xyz);