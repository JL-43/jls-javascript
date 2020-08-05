const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  return randomValue < 0.34 ? ROCK : randomValue < 0.67 ? PAPER : SCISSORS;
};

const getWinner = (pChoice, cChoice) => {
  return pChoice === cChoice
    ? RESULT_DRAW
    : (pChoice === ROCK && cChoice === SCISSORS) ||
      (pChoice === PAPER && cChoice === ROCK) ||
      (pChoice === SCISSORS && cChoice === PAPER)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
	let message = `You picked ${playerChoice} and computer picked ${computerChoice} so`;
	message =
    winner === RESULT_DRAW
      ? `${message} its a draw!`
      : winner === RESULT_PLAYER_WINS
      ? `${message} you win!`
      : `${message} computer wins!`;
  alert(message);
  gameIsRunning = false;
});

//not related to the game

const math = (resultHandler, operation, ...numbers) => {
  const validateNumber = number => isNaN(number) ? 0 : number
  let sum = 0;
  for (const num of numbers){
    operation === 'ADD' ? sum += validateNumber(num)
    : operation === 'SUBTRACT' ? sum -= validateNumber(num)
    : console.log('Thats not a valid operation');
  }
  resultHandler(sum);
};

// const subtractUp = (resultHandler, ...numbers) => {
//   let diff = 0;
//   for(const num of numbers){
//     diff -= num
//   }
//   resultHandler(diff);
// }

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
}

math(showResult.bind(this, 'The result after adding all numbers is: '), 'ADD', 10, 20, 30);
math(showResult.bind(this, 'The result after subtracting all numbers is: '), 'SUBTRACT', 10, 20, 30);