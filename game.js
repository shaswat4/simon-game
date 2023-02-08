var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern  = [];

function nextSequence() {
    var x = Math.random()*4;
    x = Math.floor(x);
    return x;     
}

var randNum = nextSequence();
var randColor = buttonColours[randNum];

console.log(randColor);
