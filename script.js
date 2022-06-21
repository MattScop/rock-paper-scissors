// ROCK PAPER SCISSORS GAME!!!

// Create an array in which we store the 3 different outputs;
const outputArray = ["Rock", "Paper", "Scissors"];

// Create a function computerPlay that outputs randomly either rock, paper or scissors from the array.
function computerPlay() {
   const random = Math.floor(Math.random() * outputArray.length);
   return outputArray[random];
}

console.log(computerPlay());