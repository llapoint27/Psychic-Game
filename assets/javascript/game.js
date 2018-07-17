//Javascript for Psychic Game//
// INDEXOF/SPLICE
//Array of possible letter choice//
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//Defining my variables//
var guessesLeft = 9;
var guessChoices = [];
var wins = 0;
var losses = 0;

//Defining a function
document.onkeyup = function (event) {

    //Each time a key is pressed, it will store that value in 'userGuess'
    var userGuess = event.key.toLowerCase();
  
    //Defining my computerGuess varible. Whatever letter the computer chooses at random will store that value inside varible: computerGuess
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    


    //
    if (computerChoices.indexOf(userGuess) > -1) {

        //Contents in userGuess and computerGuess match run this function. 
        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 9;
            guessChoices = [];
        } 
        
        //Does not equal run the funtion.
        if (userGuess !== computerGuess) {
            guessesLeft--;
            guessChoices.push(userGuess);
        }

        //If guessesLeft equals 0 then run this functionl. 
        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            guessChoices = [];


        }

        //Selecting the id #game to input the following varible values in our HTML. This allows us to dynamically change our HTML elements.  
        var html =
            "<p>Guess what letter I'm thinking of...</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

        document.querySelector("#game").innerHTML = html;


    }
};

