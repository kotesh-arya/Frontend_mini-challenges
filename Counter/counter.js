console.clear();
// let userData = ;
// function updateInBatch(userData) {
//   let limitedBatch;
//   console.log(userData.length, "user data length");
//   while (userData.length !== 0) {
//     // console.log(userData.length, "user mowa");

//     if (userData.length > 5) {
//       limitedBatch = userData.splice(0, 5);
//       console.log(limitedBatch, "SLIcE");
//       return updateInBatch(userData);
//     }
//     limitedBatch = userData.splice(0, userData.length);
//     console.log(limitedBatch, "limited batch");
//     limitedBatch.forEach((id) => {
//       const updatedUserData = {
//         nickname_synced: true
//       };
//       // batch.update(userModel.doc(id), updatedUserData);
//       // usersBatch.push({ id });
//     });
//     return updateInBatch(userData);
//   }
//   // return;
// }
// updateInBatch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

// parent()

// function add(a, b, c, d, e) {
//   let count = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     count += arguments[i];
//   }
//   console.log(count);
// }
// add(5, 13, 7, 28, 14);
// function checkEvenOrOdd(num) {
//   if (num % 2 === 0) {
//     console.log("Number is even");
//   } else {
//     console.log("num is odd");
//   }
// }

// checkEvenOrOdd(333333);

const incrementBtn = document.getElementById("up");
const decrementBtn = document.getElementById("down");
const countElement = document.getElementById("count");
const resetElement = document.getElementById("reset");
const inputElement = document.getElementById("num");
console.log(incrementBtn);
console.log(inputElement);
console.log(inputElement);
console.log(inputElement);

countElement.innerText = 0;
let counter = 0;
incrementBtn.addEventListener("click", () => {
  if (inputElement.value) {
    counter += Number(inputElement.value);
  } else {
    counter += 1;
  }
  countElement.innerText = counter;
});
decrementBtn.addEventListener("click", () => {
  if (inputElement.value) {
    counter -= Number(inputElement.value);
  } else {
    counter -= 1;
  }
  countElement.innerText = counter;
});
resetElement.addEventListener("click", () => {
  counter = 0;
  countElement.innerText = counter;
});
