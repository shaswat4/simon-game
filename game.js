var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern  = [];

function nextSequence() {
    var x = Math.random()*4;
    x = Math.floor(x);

    gamePattern.push( buttonColours[x] );

    buttonFlashAnimation( buttonColours[x] );

}

var randNum = nextSequence();
var randColor = buttonColours[randNum];

console.log(randColor);

function buttonFlashAnimation( color ){
    $("."+color).fadeOut(100).fadeIn();
}

