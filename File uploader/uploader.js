console.clear();
const sampleELement = document.getElementById("sample");
const filesUploadElement = document.getElementById("files");
let fileIconElement = document.createElement("IMG");
fileIconElement.style.height = "25px";
fileIconElement.style.width = "25px";

fileIconElement.src = "https://cdn-icons-png.flaticon.com/128/2258/2258853.png";
sampleELement.appendChild(fileIconElement);
sampleELement.style.display = "none";
// console.log(uploadElement);
// fileElement.style.color = "green";
filesUploadElement.addEventListener("click", handleUpload);
function handleUpload() {
  console.log("clicked to upload");
  // let fileIconElement = document.createElement("img");
  // fileIconElement.src =
  //   "https://cdn-icons-png.flaticon.com/128/2258/2258853.png";
  // filesUploadElement.prepend(fileIconElement);
  setTimeout(() => {
    sampleELement.style.display = "flex";
  }, 5000);
}
