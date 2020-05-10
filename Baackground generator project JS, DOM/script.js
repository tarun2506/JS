var css = document.querySelector("h3");
var color1 = document.querySelector(".color-1");
var color2 = document.querySelector(".color-2");
var body = document.getElementById("gradient");
// console.log(body);
// console.log(color1);
// console.log(color2); 
// console.log("css");
function colorvalue(){
    body.style.background= "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

    css.textContent = body.style.background + ";";
}
color1.addEventListener("input", colorvalue);

color2.addEventListener("input", colorvalue);