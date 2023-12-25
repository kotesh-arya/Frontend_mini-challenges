console.clear();

const buttonElement = document.getElementById("play");
console.log(buttonElement);
const diceOneElement = document.querySelector(".dice1");
const diceTwoElement = document.querySelector(".dice2");
const resultElement = document.getElementById("result");
console.log(diceTwoElement.childNodes, "hihi");
buttonElement.addEventListener("click", () => {
  let firstDiceCount = Math.trunc(Math.random() * 10) - 3;
  let secondDiceCount = Math.trunc(Math.random() * 10) - 3;
  if (firstDiceCount <= 0) {
    firstDiceCount = 1;
  }
  if (secondDiceCount <= 0) {
    secondDiceCount = 1;
  }
  console.log(firstDiceCount);
  while (diceOneElement.children.length > 0) {
    diceOneElement.removeChild(diceOneElement.childNodes[0]);
  }
  //   diceOneElement.removeChild()
  for (let i = 0; i < firstDiceCount; i++) {
    const diskElement = document.createElement("div");
    diskElement.classList.add("disk");
    diceOneElement.appendChild(diskElement);
  }
  console.log(secondDiceCount);
  while (diceTwoElement.children.length > 0) {
    diceTwoElement.removeChild(diceTwoElement.childNodes[0]);
  }
  //   diceTwoElement.removeChild()
  for (let i = 0; i < secondDiceCount; i++) {
    const diskElement = document.createElement("div");
    diskElement.classList.add("disk");
    diceTwoElement.appendChild(diskElement);
  }

  if (firstDiceCount > secondDiceCount) {
    console.log("Player 1 wins");
    resultElement.innerHTML = `<h1>Player 1 wins</h1>`;
  } else if (firstDiceCount < secondDiceCount) {
    console.log("Player 2 wins");
    resultElement.innerHTML = `<h1>Player 2 wins</h1>`;
  } else {
    console.log("DRAW");
    resultElement.innerHTML = `<h1>DRAW !</h1>`;
  }
});
