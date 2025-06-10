let randomNumbr = parseInt(Math.random() * 100 + 1);
const submit = document.getElementById("subt");
const userInput = document.getElementById("guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOVER = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number between 1 and 100");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    prevGuess.push(guess);
    if (numGuesses === 10) {
      displayGuess(guess);
      displayMessage(`Game Over! The number was ${randomNumbr}.`);
      endGame();
    } else {
      checkGuess(guess);
      displayGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumbr) {
    displayMessage(
      `Congratulations! You guessed the number ${randomNumbr} in ${numGuesses} tries!`
    );
    endGame();
  } else if (guess < randomNumbr) {
    displayMessage("Your guess is too low!");
    // lowOrHitextContent = "Last guess was too low!";
  } else if (guess > randomNumbr) {
    displayMessage("Your guess is too high!");
    // lowOrHitextContent = "Last guess was too high!";
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `; 
  remaining.textContent = `${10 - numGuesses} guesses remaining.`;
  numGuesses++;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}<h2/>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");  
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOVER.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");  
    newGameButton.addEventListener("click", function () {
      randomNumbr = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuesses = 1;
      guessSlot.innerHTML = "";
      remaining.textContent = `${11 - numGuesses} guesses remaining.`;
     
      userInput.removeAttribute("disabled");
       startOVER.removeChild(p);
      playGame = true;
      // lowOrHi.innerHTML = `<h2>Start guessing!</h2>`; 
    });
  
}
