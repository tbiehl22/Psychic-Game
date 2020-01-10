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

if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
    wins++;
    guessesLeft = 9;
    lettersGuessed.lenth = 0;
    computerGuesses.lenth = 0;
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.lenth)];
    computerGuesses.push(compGuess);
    console.log(computerGuesses[0]);
}

else if ((playerGuess !== computerGuesses[0])  && (guessesLeft > 0)) {
    guessesLeft = guessesLeft-1;
}

else {
    losses++;
    guessesLeft = 9;
    lettersGuessed.lenth = 0;
    computerGuesses.length = 0;
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

var html = "<p>Guess what letter I'm thinking of</p>" +
           "<p>Wins: " + wins + "</p>" +
           "<p>Losses: " + losses + "</p>" +
           "<p>Guesses left: " + guessesLeft + "</p>" +
           "<p>Your guesses so far: " + lettersGuessed + "</p>";


document.querySelector("#game").innerHTML = html;






