// ROCK PAPER SCISSORS GAME!!!

// Create an array in which we store the 3 different outputs;
const outputArray = ["Rock", "Paper", "Scissors"];

// Create a function computerPlay that outputs randomly either rock, paper or scissors from the array.
function computerPlay() {
   const random = Math.floor(Math.random() * outputArray.length);
   return outputArray[random];
}

// Create a constant in which we store the computerPlay() output
const computerSelection = computerPlay();

// Create a variable in which we store the player's choice.
let playerSelection = "RoCk";

// Create a function to check the correct input and make it case insensitive. Used a switch statement here.
function playerPlay() {
    const loweredCase = playerSelection.toLowerCase();
    
    switch (true) {
        case loweredCase != 'rock':
            console.log("Wrong input, please type rock, paper or scissors");
            break;
            
        default:
            console.log(loweredCase);
    }
}

playerPlay()
