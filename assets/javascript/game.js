// creating array for choices
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        
// randomly selects a letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // console.log(computerGuess);

// creating variables for wins, losses and guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//array to hold guessed letters
var guessed = []

// function runs when user presses a key
document.onkeyup = function(event) {

    // determines which key was pressed
    var userGuess = event.key

    // prints choices to console log
    console.log("next round");
    console.log("computer guess: " + computerGuess);
    console.log("user guess: " + userGuess);

// logic determines wins and losses
    
    //user correctly guesses
    if (userGuess === computerGuess) {
        //adds 1 to wins, resets guesses left, cleares guessed array, picks a new random letter
        wins++;
        guessesLeft = 9;
        guessed = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //user incorrectly guesses
    } else if (userGuess != computerGuess) {
        //when there are still guesses left - decreases number of guesses, added the user guess to the guessed array
        if (guessesLeft > 1){
        guessesLeft = guessesLeft-1;
        guessed.push(userGuess);
        } else {
            //when guesses run out - resets guesses, adds 1 to losses, clears guessed array, picks a new random letter
            guessesLeft = 9
            losses++
            guessed = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }
    }

// prints wins and losses to  console log
console.log("wins: " + wins);
console.log("losses: " + losses);
console.log("guesses left: " + guessesLeft);

//variable to hold html that keeps track of game
var html = 
    "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter I'm thinking of.</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + guessed + "</p>";

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;

}