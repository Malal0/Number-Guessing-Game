//  Variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
const guesses = document.querySelector('.guesses');
const guessesLeft = document.querySelector('.tries');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const resultsBox = document.querySelector('.resultParas');
const language = document.querySelector("#languages");

const title = document.querySelector("#title");
const mainTxt = document.querySelector("#main-txt");
const label = document.querySelector("#label");
const guessBtn = document.querySelector("#guess-submit");

let guessCount = 1;
guessField.focus();

let tryCount = 9;

let resetButton;

// let gameOverTxt = 'GAME OVER';
let prevGuessTxt = 'Previous guesses: ';

//  Functions
function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = prevGuessTxt;
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        if (language.value === "english") {
            lastResult.textContent = 'Congratulations! You got it right!';
        } else {
            lastResult.textContent = '¡Felicidades! ¡Lo hiciste bien!';
        }
        lastResult.style.backgroundColor = '#008000';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        if (language.value === "english") {
            lastResult.textContent = 'GAME OVER';
        } else {
            lastResult.textContent = 'JUEGO TERMINADO';
        }
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
        title.textContent = "Number Guessing Game";
        mainTxt.textContent = "We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.";
        label.textContent = "Enter a guess:";
        guessBtn.value = "Submit guess";
        prevGuessTxt = "Previous guesses: "
        // gameOverTxt = 'GAME OVER';
    } else {
        title.textContent = "Juego de adivinanzas de números";
        mainTxt.textContent = "Hemos seleccionado un número aleatorio entre 1 y 100. Vea si puede adivinarlo en 10 turnos o menos. Le diremos si su conjetura fue demasiado alta o demasiado baja.";
        label.textContent = "Introduce una conjetura:";
        guessBtn.value = "Enviar conjetura";
        prevGuessTxt = "Conjeturas anteriores: "
        // gameOverTxt = 'JUEGO TERMINADO';
    }

})