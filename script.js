// ROCK PAPER SCISSORS GAME!!!

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~OLD COMMENT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* STEP 1:
Create a function computerPlay that randomly returns rock, paper, scissors.
Create an array with those values that the function can take to randomly return one of them.
*/
// NOTE TO SELF: the computer firstly needs to target the array; then it must randomly return an output.


/* STEP 2:
Create a function with two parameters, playerSelection and computerSelection and based on the rules of the game, declare the winner.
Create the two variables in which the two selections are stored.
*/
// NOTE TO SELF: first I create the variable computerSelection that stores the output of the computerPlay();
//               then I create the variable playerSelection with a chosen value (not a random one this time).
//               (the values must be case INSENSITIVE).
//               after the variables, I need to create a function that takes both variables and declares
//               a winner based on the game's rules with a if or switch statement.


/* STEP 3
Create a function game() in which the playRound() is called 5 times.
Keep record of the each function result.
Report the winner
*/
// NOTE TO SELF: the function game() must have a for loop to play
// 5 times; then for each iteration we need to store and print the
// result. For each round we need to store 1 or 0 depending on who won
// the match in an array and then the winner is the one whose array has
//  a length of at least 3.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~OLD COMMENT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~






const RPS = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    const randomPlay = Math.floor(Math.random() * RPS.length);
    const aiCard = document.querySelector('.ai-card');

    // match picture with computer selection
    if (RPS[randomPlay] === 'Paper') {
        aiCard.style.content = 'url(img/paper.png)';
    } else if (RPS[randomPlay] === 'Rock') {
        aiCard.style.content = 'url(img/rock.png)';
    } else {
        aiCard.style.content = 'url(img/scissors.png)';
    }
}

// function playerPlay() {
//     return prompt("Insert Rock, Paper or Scissors");
// }

// const computerSelection = computerPlay();
// const computerSelIns = computerSelection.toLowerCase();

// const arrComputer = [];
// const arrPlayer = []; 

// function declareWinner(arrComputer, arrPlayer) {
//     if (arrComputer.length > arrPlayer.length) {
//         console.log("The Winner is The Computer");
//     } else if (arrComputer.length < arrPlayer.length) {
//         console.log("You Won!");
//     } else {
//         console.log("No Winner here, Rematch!");
//     }
// } 

// function game() {
//     let loopNum = 5;
//     for (let i = 1; i <= loopNum; i++) {
//         computerPlay();
//         let playerSelection = playerPlay();
//         let playerSeleIns = playerSelection.toLowerCase();
//         const playResult = playRound(computerSelIns, playerSeleIns);
          

//         function playRound(computerSelIns, playerSeleIns) {
//             switch (true) {
//                 case computerSelIns === playerSeleIns:
//                     return "It's a Tie!";
        
//                 case computerSelIns === 'rock' && playerSeleIns === 'scissors':
//                     return "You lost this match, Rock beats Scissors!";
//                 case computerSelIns === 'rock' && playerSeleIns === 'paper':
//                     return "Congratulations, you won this match! Paper beats Rock.";
        
//                 case computerSelIns === 'paper' && playerSeleIns === 'rock':
//                     return "You lost this match, Paper beats Rock!";
//                 case computerSelIns === 'paper' && playerSeleIns === 'scissors':
//                     return "Congratulations, you won this match! Scissors beats Paper.";
        
//                 case computerSelIns === 'scissors' && playerSeleIns === 'rock':
//                     return "Congratulations, you won this match! Rock beats Scissors.";
//                 case computerSelIns === 'scissors' && playerSeleIns === 'paper':
//                     return "You lost this match, Scissors beats Paper!";
        
//                 default:
//                     return "Something went terribly wrong!";
//             }
//         }
//         console.log(`Match:${i}: ${playerSeleIns}`);
//         console.log(`Match:${i}: ${computerSelIns}`);
//         console.log(playRound(computerSelIns, playerSeleIns));
//         if (playResult.includes('Congratulations')) {
//             arrPlayer.push(i)
//         } else if (playResult.includes('You lost')) {
//             arrComputer.push(i)
//         } else if (playResult.includes("It's a Tie")) {
//             arrPlayer.push(i);
//             arrComputer.push(i);
//         } else {
//             loopNum += 1;
//         }
//     }
//     declareWinner(arrComputer, arrPlayer);
// }
    
// game();