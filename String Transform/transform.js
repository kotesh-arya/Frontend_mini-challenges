console.clear();
const inputElement = document.getElementById("input");
const lowerElement = document.getElementById("lower");
const upperElement = document.getElementById("upper");
const camelElement = document.getElementById("camel");
const pascalElement = document.getElementById("pascal");

const snakeElement = document.getElementById("snake");
const kebabElement = document.getElementById("kebab");
const trimElement = document.getElementById("trim");

inputElement.addEventListener("input", () => {
  lowerElement.innerText = inputElement.value.toLowerCase();
  upperElement.innerText = inputElement.value.toUpperCase();
  let camelConversion = inputElement.value.split(" ");
  for (let i = 1; i < camelConversion.length; i++) {
    camelConversion[i] =
      camelConversion[i].charAt(0).toUpperCase() + camelConversion[i].slice(1);
  }
  camelElement.textContent = camelConversion.join("");
  let pascalConversion = inputElement.value.split(" ");
  for (let i = 0; i < pascalConversion.length; i++) {
    pascalConversion[i] =
      pascalConversion[i].charAt(0).toUpperCase() +
      pascalConversion[i].slice(1);
  }
  pascalElement.textContent = pascalConversion.join("");

  snakeElement.innerText = inputElement.value
    .split(" ")
    .join("_")
    .toLowerCase();
  kebabElement.innerText = inputElement.value
    .split(" ")
    .join("-")
    .toLowerCase();
  trimElement.innerText = inputElement.value.split(" ").join("").toLowerCase();
});

// function getMaxElement(node) {
//   if (node.children.length === 0) {
//     return 0;
//   }
//   return Math.max(getMaxElement(node.children[0]), getMaxElement(node.children[1]), node.data);
// }
