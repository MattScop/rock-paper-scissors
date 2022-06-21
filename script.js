// ROCK PAPER SCISSORS GAME!!!

// Create an array in which we store the 3 different outputs;
const outputArray = ["Rock", "Paper", "Scissors"];

// Create a function computerPlay that outputs randomly either rock, paper or scissors from the array.
function computerPlay() {
   const random = Math.floor(Math.random() * outputArray.length);
   return outputArray[random];
}

// Create a constant in which we store the computerPlay()
const computerSelection = computerPlay();

// Player can write his choice.
// the choice should be put in lowercase before and stored.
// write a function with the two selections;