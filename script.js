// ROCK PAPER SCISSORS GAME!!!

/* STEP 1:
Create a function computerPlay that randomly returns rock, paper, scissors.
Create an array with those values that the function can take to randomly return one of them.
*/

// NOTE TO SELF: the computer firstly needs to target the array; then it must randomly return an output.

const arr = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

computerPlay()

/* STEP 2:
Create a function with two parameters, playerSelection and computerSelection and based on the rules of the game, declare the winner.
Create the two variables in which the two selections are stored.
*/

// NOTE TO SELF: first I create the variable computerSelection that stores the output of the computerPlay();
//               then I create the variable playerSelection with a chosen value (not a random one this time).
//               (the values must be case INSENSITIVE).
//               after the variables, I need to create a function that takes both variables and declares
//               a winner based on the game's rules with a if or switch statement.

const computerSelection = computerPlay();
const computerSelIns = computerSelection.toLowerCase();
let playerSelection = "Rock";
let playerSeleIns = playerSelection.toLowerCase();

function playRound(computerSelIns, playerSeleIns) {
    switch (true) {
        case computerSelIns === playerSeleIns:
            return "It's a Tie!";

        case computerSelIns === 'rock' && playerSeleIns === 'scissors':
            return "You lost this match, Rock beats Scissors!";
        case computerSelIns === 'rock' && playerSeleIns === 'paper':
            return "Congratulations, you won this match! Paper beats Rock.";

        case computerSelIns === 'paper' && playerSeleIns === 'rock':
            return "You lost this match, Paper beats Rock!";
        case computerSelIns === 'paper' && playerSeleIns === 'scissors':
            return "Congratulations, you won this match! Scissors beats Paper.";

        case computerSelIns === 'scissors' && playerSeleIns === 'rock':
            return "Congratulations, you won this match! Rock beats Scissors.";
        case computerSelIns === 'scissors' && playerSeleIns === 'paper':
            return "You lost this match, Scissors beats Paper!";

        case playerSeleIns !== 'rock' || playerSeleIns !== 'paper' || playerSeleIns !== 'scissors':
            return "You inserted an incorrect value. Please type either Rock, Paper, or Scissors.";

        default:
            return "Something went terribly wrong!";
    }
}

console.log(computerSelection)
console.log(playerSelection)
console.log(playRound(computerSelIns, playerSeleIns));