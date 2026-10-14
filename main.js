const counterContainer = document.querySelector(".counter");
const increaseButton = document.querySelector(".increase");
const resetButton = document.querySelector(".reset");

let counter = 5;

function isCounterTooBig() {
  return counter > 10;
}

function renderCounter() {
  counterContainer.textContent = `Counter: ${counter}`;
  increaseButton.classList.toggle("red", isCounterTooBig());
}

increaseButton.addEventListener("click", () => {
  counter = counter + 1;
  renderCounter();
})

resetButton.addEventListener("click", () => {
  counter = 0;
  renderCounter();
})

