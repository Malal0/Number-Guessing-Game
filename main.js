//  Variables
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const guessesLeft = document.querySelector('.tries');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const resultsBox = document.querySelector('.resultParas');

var language = document.querySelector("#languages");

let guessCount = 1;
guessField.focus();

let tryCount = 9;

let resetButton;

//  Functions
function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1 && language.value == "english") {
        guesses.textContent = 'Previous guesses: ';
    } else {
        guesses.textContent = 'Spanish: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = '#008000';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'GAME OVER';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low! Try a higher number!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high! Try a lower number!';
        }
    }

    guessesLeft.textContent = `Guesses remaining: ${tryCount}`;

    guessCount++;
    guessField.value = '';
    guessField.focus();
    tryCount--;
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.className = "resetBtn";
    resetButton.textContent = 'Start new game';
    resultsBox.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = '#00000000';

    randomNumber = Math.floor(Math.random() * 100) + 1;
    tryCount = 9;
}


guessSubmit.addEventListener('click', checkGuess);
// language.addEventListener("change", () => {
//     console.log(language.value);

// })

addEventListener("change", () => {
    if (language.value === "english") {
        console.log(`Language is ${language.value}`);
    } else {
        console.log(`Language is ${language.value}`);
    }

})