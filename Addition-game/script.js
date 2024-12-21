let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let correctMessage = "Congratulations! You got it right.";
let wrongMessage = "Please Try Again!";

function restartButton() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;

    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);
    userInputElement.value = "";
    gameResultElement.textContent = "";
}

restartButton();

function checkButton() {
    let firstRandomInt = parseInt(firstNumberElement.textContent);
    let secondRandomInt = parseInt(secondNumberElement.textContent);
    let userInput = parseInt(userInputElement.value);

    let total = firstRandomInt + secondRandomInt;

    if (userInput === total) {
        gameResultElement.textContent = correctMessage;
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = wrongMessage;
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}