var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern  = [];
var gameLevel = 0;
var userClickedPattern = [];
var started = false ;

$(document).keypress( function (){
    if ( gameLevel == 0 && started == false){
        nextSequence();
        started = true ;
    }
});

$(".btn").click(function (){
    var userChosenColor = this.id ;
    playAudio(userChosenColor);
    animatePress(userChosenColor);
    console.log(userChosenColor);
    userClickedPattern.push(userChosenColor);
});

function nextSequence() {
    var x = Math.random()*4;
    x = Math.floor(x);

    gameLevel++;
    $("h1").text("Level " + gameLevel);

    var topColor = buttonColours[x];
    gamePattern.push( topColor );

    buttonFlashAnimation( topColor );
    playAudio( topColor);

}


// console.log(randColor);

function buttonFlashAnimation( color ){
    $("."+color).fadeOut(100).fadeIn();
}

function animatePress( color) {
    $("."+ color).toggleClass("pressed");
    setTimeout( function () {
        $("."+ color).toggleClass("pressed");
    } ,100);
}

function playAudio( color ) {
var audio = new Audio("sounds/" + color +".mp3");
audio.play();
    
}

function changeLevel(){

}