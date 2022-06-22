// ROCK PAPER SCISSORS GAME!!!

/* STEP 1:
Create a function computerPlay that randomly returns rock, paper, scissors.
Create an array with those values that the function can take to randomly return one of them.*/

// NOTE TO SELF: the computer firstly needs to target the array; then it must randomly return an output.

const arr = ['Rock', 'Paper', 'Scissors'];
console.log(arr);

function computerPlay() {
    let random = Math.floor(Math.random() * arr.length);
    console.log(arr[random]);
}

computerPlay()





// // Create an array in which we store the 3 different outputs;
// const outputArray = ["rock", "paper", "scissors"];


// // Create a function computerPlay that outputs randomly either rock, paper or scissors from the array.
// function computerPlay() {
//    const random = Math.floor(Math.random() * outputArray.length);
//    return outputArray[random];
// }

// // Create a constant in which we store the computerPlay() output
// const computerSelection = computerPlay();

// console.log(computerSelection)

// // Create a variable in which we store the player's choice.
// let playerSelection = "rocK";
// let loweredCase = playerSelection.toLowerCase();

// // Create a function to check the correct input and make it case insensitive. Used a switch statement here.
// function playerPlay() {
//     if (loweredCase != 'rock' || loweredCase != 'paper' || loweredCase != 'scissors') {
//         console.log("wrong input, please type rock, paper or scissors");
//     } else {
//         return loweredCase;
//     }
// }

// console.log(playerPlay());

// // // Create a function that declares the winner based on game's rules
// // function declareWinner(computerSelection, loweredCase) {
    
// //     if (computerSelection === 'rock' && loweredCase === 'scissors') {
// //         console.log("you lost! rock beats scissors.");
// //     } else if (computerSelection === 'rock' && loweredCase === 'paper') {
// //         console.log("you won this match! paper beats rock");
// //     } else if (computerSelection === 'scissors' && loweredCase === 'rock') {
// //         console.log("you won this match! rock beats scissors");
// //     } else {
// //         console.log('its a tie')
// //     }
// // }

// // declareWinner();