//Javascript for Psychic Game//

//Array of possible letter choice//
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//Defining my variables//
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessChoices = [];

//Defining a function
document.onkeyup = function (event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log(event);

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


    if (options.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 9;
            guessChoices = [];
        }

        if (userGuess != computerGuess) {
            guessesLeft--;
            guessChoices.push(userGuess);
        }

        if (guessesLeft === 0) {

            guessesLeft = 9;
            losses++;
            guessChoices = [];


        }

        var html =
            "<p>Guess what letter I'm thinking of...</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

        document.querySelector("#game").innerHTML = html;


    }
};

