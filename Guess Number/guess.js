console.clear();
const containerElement = document.getElementById("container");
const outputElement = document.getElementById("output");
const inputElement = document.getElementById("enter");
const submitElement = document.getElementById("submit");
const startElement = document.getElementById("start");
const guessNumber = Math.floor(Math.random() * 100);
const guessElement = document.getElementById("guess");

let guesArr = [];
function checkGuess(e) {
  e.preventDefault();
  if (guesArr.length === 0) {
    guessElement.innerText = `Your Guesses:`;
  }
  if (guesArr.length >= 10) {
    guessElement.style.color = "orange";
    guessElement.innerText = `You have lost the game! and the magic number is ${guessNumber}`;
    submitElement.setAttribute("disabled", true);
    startElement.removeAttribute("disabled");
  } else {
    if (inputElement.value && inputElement.value < guessNumber) {
      containerElement.style.border = "2px solid red";
      outputElement.style.color = "red";
      outputElement.innerText = "Guessed too low";
      guessElement.innerText += ` ${inputElement.value}`;
      guesArr.push(inputElement.value);
    } else if (inputElement.value && inputElement.value > guessNumber) {
      outputElement.style.color = "red";
      containerElement.style.border = "2px solid red";
      outputElement.innerText = "Guessed too high";
      guessElement.innerText += ` ${inputElement.value}`;
      guesArr.push(inputElement.value);
    } else if (
      inputElement.value &&
      Number(inputElement.value) === guessNumber
    ) {
      outputElement.style.color = "green";
      containerElement.style.border = "2px solid green";
      outputElement.innerText = "Yay! That's a correct guess";
      guessElement.style.display = "block";
      startElement.removeAttribute("disabled");
      submitElement.setAttribute("disabled", true);
    }
  }
}
function resetGame(e) {
  e.preventDefault();
  outputElement.innerText = "";
  guessElement.innerText = "";
  inputElement.value = "";
  submitElement.removeAttribute("disabled");
  startElement.setAttribute("disabled", true);
  containerElement.style.border = "none";
}
submitElement.addEventListener("click", (e) => {
  checkGuess(e);
});
startElement.addEventListener("click", (e) => {
  resetGame(e);
});
