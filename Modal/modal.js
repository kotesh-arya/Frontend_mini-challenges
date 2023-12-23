console.clear();

const showButtonElement = document.getElementById("show-btn");

const modalContainer = document.createElement("div");
modalContainer.classList.add("modal-container");
modalContainer.style.display = "none";
const modalElement = document.createElement("div");
modalElement.classList.add("modal");
const modalHeadingElement = document.createElement("heading");
modalHeadingElement.textContent = "Header";
const modalContentElement = document.createElement("p");
modalContentElement.textContent =
  "gbslbldknglksdgilsdkngskdnglkjsd lsfnsdknflsknflkdsnflsdfs dfsdkfblksbfksdfkndsfijdfjaoifjsdlafjd faofhadfhsdkfhsd fwho evere cares about the currebt scenarihb";
modalElement.append(modalHeadingElement);

modalElement.append(modalContentElement);

const modalBtnElement = document.createElement("button");
modalBtnElement.textContent = "Close modal";
modalElement.append(modalBtnElement);
modalContainer.append(modalElement);
document.body.append(modalContainer);

showButtonElement.addEventListener("click", openModal);
function openModal() {
  modalContainer.style.display = "block";
}
modalBtnElement.addEventListener("click", closeModal);
function closeModal() {
  console.log("modal clicked");
  modalContainer.style.display = "none";
}
