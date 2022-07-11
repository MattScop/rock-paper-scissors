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
const declareWinner = document.querySelector('.round-winner');
const overlay = document.getElementById('overlay-round');
const overlayGame = document.getElementById('overlay-game');
const youScore = document.querySelector('.you-score-point');
const aiScore = document.querySelector('.ai-score-point');
const roundText = document.querySelector('.round');
let youNumber = 0;
let aiNumber = 0;
let roundNumber = 1;

playerCards.forEach(card => {
    card.addEventListener('click', (e) => {
        const playerCard = e.target;

        playerCard.classList.add('selection');
        computerCard.classList.remove('hideAiCard');

        computerPlay()
        const computerSelectionRound = computerPlay();

        overlay.classList.add('show');

        switch (true) {
            case RPS[computerSelectionRound] === e.target.innerHTML:
                declareWinner.textContent = "It's a Tie!";    
                ++roundNumber
                roundText.textContent = `Go to Round ${roundNumber}`;                
            break;
        
            case RPS[computerSelectionRound] === 'Rock' && e.target.innerHTML === 'Scissors':
                declareWinner.textContent = "You lost this match, Rock beats Scissors!";
                ++aiNumber;
                aiScore.textContent = `AI: ${aiNumber}`;
                ++roundNumber
                roundText.textContent = `Go to Round ${roundNumber}`; 
            break;

            case RPS[computerSelectionRound] === 'Rock' && e.target.innerHTML === 'Paper':
                declareWinner.textContent = "Congratulations, you won this match! Paper beats Rock.";
                ++youNumber;
                youScore.textContent = `YOU: ${youNumber}`;
                ++roundNumber
                roundText.textContent = `Go to Round ${roundNumber}`; 
            break;
        
            case RPS[computerSelectionRound] === 'Paper' && e.target.innerHTML === 'Rock':
                declareWinner.textContent = "You lost this match, Paper beats Rock!";
                ++aiNumber;
                aiScore.textContent = `AI: ${aiNumber}`;
                ++roundNumber
                roundText.textContent = `Go to Round ${roundNumber}`; 
            break;

            case RPS[computerSelectionRound] === 'Paper' && e.target.innerHTML === 'Scissors':
                declareWinner.textContent = "Congratulations, you won this match! Scissors beats Paper.";
                ++youNumber;
                youScore.textContent = `YOU: ${youNumber}`;
                ++roundNumber
                roundText.textContent = `Go to Round ${roundNumber}`; 
            break;
        
            case RPS[computerSelectionRound] === 'Scissors' && e.target.innerHTML === 'Rock':
                declareWinner.textContent = "Congratulations, you won this match! Rock beats Scissors.";
                ++youNumber;
                youScore.textContent = `YOU: ${youNumber}`;
                ++roundNumber
                roundText.textContent = `Go to Round ${roundNumber}`; 
            break;

            case RPS[computerSelectionRound] === 'Scissors' && e.target.innerHTML === 'Paper':
                declareWinner.textContent = "You lost this match, Scissors beats Paper!";
                ++aiNumber;
                aiScore.textContent = `AI: ${aiNumber}`;
                ++roundNumber
                roundText.textContent = `Go to Round ${roundNumber}`; 
            break;
        
            default:
                declareWinner.textContent = "Something went terribly wrong!";
        }
        theWinnerIs()
    })
})

const gameWinner = document.querySelector('.game-winner');
function theWinnerIs() {

    if (aiNumber === 5) {
        gameWinner.textContent = "The Winner is The Computer";
        overlayGame.classList.add('showRematch')
    } else if (youNumber === 5) {
        gameWinner.textContent = "You Won!";
        overlayGame.classList.add('showRematch')
    }
} 

const gameRematch = document.querySelector('.game');
gameRematch.addEventListener('click', rematch);

function rematch() {
    youNumber = 0;
    aiNumber = 0;
    roundNumber = 1;
    youScore.textContent = `YOU: ${youNumber}`;
    aiScore.textContent = `AI: ${aiNumber}`;
    gameWinner.textContent = "";
    declareWinner.textContent = "";
    overlayGame.classList.remove('showRematch');
    roundText.textContent = `Go to Round ${roundNumber}`; 
    computerPlay()
    nextRound()
}

overlay.addEventListener('click', nextRound);

function nextRound() {
    overlay.classList.remove('show');
    playerCards.forEach((card) => {
        if (card.classList.contains = 'selection') {
            card.classList.remove('selection');
        }
    })
    computerCard.classList.add('hideAiCard');
}