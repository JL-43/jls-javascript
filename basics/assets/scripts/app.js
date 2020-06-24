const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription);
}

function add() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult += parseInt(enteredNumber);
	createAndWriteOutput('+', initialResult, enteredNumber);
	logEntries.push(enteredNumber);
	console.log(logEntries);
}

function subtract() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult -= parseInt(enteredNumber);
	createAndWriteOutput('-', initialResult, enteredNumber);
	logEntries.push(enteredNumber);
	console.log(logEntries);
}

function multiply() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult *= parseInt(enteredNumber);
	createAndWriteOutput('*', initialResult, enteredNumber);
	logEntries.push(enteredNumber);
	console.log(logEntries);
}

function divide() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult /= parseInt(enteredNumber);
	createAndWriteOutput('/', initialResult, enteredNumber);
	logEntries.push(enteredNumber);
	console.log(logEntries);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
