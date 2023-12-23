console.clear();

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateBtn = document.getElementById("calculate");
const resultText = document.getElementById("result");

// console.log(weightInput);
function calculateBMI(height, weight) {
  resultText.innerText = "";
  if (+height > 0 && +weight > 0) {
    let result = +weight / ((+height / 100) * (+height / 100));
    resultText.innerText = `YOUR BMI: ${result.toFixed(2)}`;
    console.log("clicked!!!", result.toFixed(2));
  } else {
    resultText.innerText = `PLEASE ENTER VALID VALUES :)`;
  }
}
calculateBtn.addEventListener("click", () => {
  calculateBMI(heightInput.value, weightInput.value);
  heightInput.value = null;
  weightInput.value = null;
});
