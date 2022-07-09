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
const computerCard = document.querySelector('.ai-card');
computerCard.classList.add('hideAiCard');

// AI random pick
function computerPlay() {
    // match picture with AI random pick
    const computerSelection = Math.floor(Math.random() * RPS.length);
    
    if (RPS[computerSelection] === 'Paper') {
        computerCard.style.content = 'url(img/paper.png)';
    } else if (RPS[computerSelection] === 'Rock') {
        computerCard.style.content = 'url(img/rock.png)';
    } else {
        computerCard.style.content = 'url(img/scissors.png)';
    }
    return computerSelection
};

computerPlay()
    
// play round
const playerCards = document.querySelectorAll('label');
const declareWinner = document.querySelector('.winner');
// styling the text
declareWinner.style.cssText = 'position: absolute; top: 0; width: 100%; text-align: center;';
const youScore = document.querySelector('.you-score');
const aiScore = document.querySelector('.ai-score');
let youNumber = 0;
let aiNumber = 0;

playerCards.forEach(card => {
    card.addEventListener('click', (e) => {
computerCard.classList.remove('hideAiCard');

        computerPlay()
        const computerSelection = computerPlay();

        switch (true) {
            case RPS[computerSelection] === e.target.innerHTML:
                declareWinner.textContent = "It's a Tie!";                
            break;
        
            case RPS[computerSelection] === 'Rock' && e.target.innerHTML === 'Scissors':
                declareWinner.textContent = "You lost this match, Rock beats Scissors!";
                ++aiNumber;
                aiScore.textContent = `AI: ${aiNumber}`;
            break;

            case RPS[computerSelection] === 'Rock' && e.target.innerHTML === 'Paper':
                declareWinner.textContent = "Congratulations, you won this match! Paper beats Rock.";
                ++youNumber;
                youScore.textContent = `YOU: ${youNumber}`;
            break;
        
            case RPS[computerSelection] === 'Paper' && e.target.innerHTML === 'Rock':
                declareWinner.textContent = "You lost this match, Paper beats Rock!";
                ++aiNumber;
                aiScore.textContent = `AI: ${aiNumber}`;
            break;

            case RPS[computerSelection] === 'Paper' && e.target.innerHTML === 'Scissors':
                declareWinner.textContent = "Congratulations, you won this match! Scissors beats Paper.";
                ++youNumber;
                youScore.textContent = `YOU: ${youNumber}`;
            break;
        
            case RPS[computerSelection] === 'Scissors' && e.target.innerHTML === 'Rock':
                declareWinner.textContent = "Congratulations, you won this match! Rock beats Scissors.";
                ++youNumber;
                youScore.textContent = `YOU: ${youNumber}`;
            break;

            case RPS[computerSelection] === 'Scissors' && e.target.innerHTML === 'Paper':
                declareWinner.textContent = "You lost this match, Scissors beats Paper!";
                ++aiNumber;
                aiScore.textContent = `AI: ${aiNumber}`;
            break;
        
            default:
                declareWinner.textContent = "Something went terribly wrong!";
        }
        theWinnerIs()
    })
})


function theWinnerIs() {
    const gameWinner = document.querySelector('.gameWinner');

    if (aiNumber === 5) {
        gameWinner.textContent = "The Winner is The Computer";
        if (confirm('Rematch?')) {
            youNumber = 0;
            aiNumber = 0;
            youScore.textContent = `YOU: ${youNumber}`;
            aiScore.textContent = `AI: ${aiNumber}`;
            gameWinner.textContent = "";
            declareWinner.textContent = "";
        }
    } else if (youNumber === 5) {
        gameWinner.textContent = "You Won!";
        if (confirm('Rematch?')) {
            youNumber = 0;
            aiNumber = 0;
            youScore.textContent = `YOU: ${youNumber}`;
            aiScore.textContent = `AI: ${aiNumber}`;
            gameWinner.textContent = "";
            declareWinner.textContent = "";
        }
    }
} 

// const arrComputer = [];
// const arrPlayer = []; 


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