var computerLetterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuesses = [];

window.onload = function () {
    var compGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
    computerGuesses.push(compGuess);
    console.log(computerGuesses[0]);
}

document.onkeyup = function(event) {
    var playerGuess = event.key;
    lettersGuessed.push(playerGuess);
    console.log(computerGuess[0]);
}




