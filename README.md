Description:
The Psychic Game is a game between you and the Psychic (a.k.a the computer). Try to guess what letter she is thinking. You have 9 guesses. If you guess correctly, you win and receive a point. If you run out of guesses, you lose. Once you run out of guesses, the game resets and you get another chance to exercise your psychic abilities. Enjoy!

Development:
This game was created with HTML, CSS, and Javascript. Please see index.html, style. css, and game.js to reference the code. 

I define a set of variables at the beginning of my javascript file. I then created a function that will record each key stroke value in another varible. 

The computer will generate a random letter, which is stored in varible 'computerChoices'. I run conditionals (if statements) to determine a set of outcomes.

If the user guesses the same letter that the computer generated, then the wins will increase by 1 and you remain with your total 9 guesses. If the user does not guess the exact letter that the computer generates ('computerGuess'), then 'guessesLeft' is subtracted by 1. When guessesLeft reaches 0, 'losses' increases by 1. 