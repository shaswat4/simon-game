var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern  = [];

function nextSequence() {
    var x = Math.random()*4;
    x = Math.floor(x);

    var topColor = buttonColours[x];
    gamePattern.push( topColor );

    buttonFlashAnimation( topColor );

    playAudio( topColor);

}

var randNum = nextSequence();
var randColor = buttonColours[randNum];

console.log(randColor);

function buttonFlashAnimation( color ){
    $("."+color).fadeOut(100).fadeIn();
}

function playAudio( color ) {
var audio = new Audio("sounds/" + color +".mp3");
audio.play();
    
}
