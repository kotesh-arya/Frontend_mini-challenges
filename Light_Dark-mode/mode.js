const pageElement = document.getElementById("page");
const containerElement = document.getElementById("container");
console.log(pageElement, containerElement);

const pageInputElement = document.getElementById("page-input");
const containerInputElement = document.getElementById("container-input");

console.log(pageInputElement, containerInputElement);

pageInputElement.addEventListener("input", (e) => {
  if (e.target.checked) {
    pageElement.classList.add("dark");
    containerInputElement.checked = true;
  } else {
    pageElement.classList.remove("dark");
    containerInputElement.checked = false;
  }

  if (containerInputElement.checked) {
    console.log("getting operated by page check box");
    containerElement.classList.add("dark");
    containerElement.classList.remove("light");
  } else {
    containerElement.classList.remove("dark");
    containerElement.classList.add("light");
  }
  containerInputElement.addEventListener("input", (e) => {
    console.log(pageInputElement.checked);
    if (e.target.checked) {
      containerElement.classList.add("dark");
      containerElement.classList.remove("light");
    } else {
      containerElement.classList.remove("dark");
      containerElement.classList.add("light");
    }
  });
});
