const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if(
        selection !== ROCK && 
        selection !== PAPER && 
        selection !== SCISSORS
    ){
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();

    // if(randomValue < 0.34) return ROCK;
    // else if(randomValue < 0.67) return PAPER;
    // else return SCISSORS;

    return randomValue < 0.34 ? ROCK : randomValue < 0.67 ? PAPER : SCISSORS

};

const getWinner = (pChoice, cChoice) => {
    // if(pChoice === cChoice){
    //     return RESULT_DRAW;
    // } else if (
    //     pChoice === ROCK && cChoice === SCISSORS ||
    //     pChoice === PAPER && cChoice === ROCK ||
    //     pChoice === SCISSORS && cChoice === PAPER 
    // ){
    //     return RESULT_PLAYER_WINS;
    // } else {
    //     return RESULT_COMPUTER_WINS;
    // }

    return (pChoice === cChoice) ? RESULT_DRAW 
    
    : (pChoice === ROCK && cChoice === SCISSORS) ||
    (pChoice === PAPER && cChoice === ROCK )||
    (pChoice === SCISSORS && cChoice === PAPER) ? RESULT_PLAYER_WINS 
    
    : RESULT_COMPUTER_WINS
}

startGameBtn.addEventListener('click', function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting');
    const playerChoice = getPlayerChoice();
    console.log(playerChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    const winner = getWinner(playerChoice, computerChoice);
    console.log(winner);
});