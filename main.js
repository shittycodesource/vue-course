const counterContainer = document.querySelector(".counter");
const increaseButton = document.querySelector(".increase");
const resetButton = document.querySelector(".reset");

const counterState = {
  _value: 5,

  get value() {
    return this._value;
  },

  set value(num) {
    this._value = num;

    renderCounter()
  }
}

function isCounterTooBig() {
  return counterState.value > 10;
}

function renderCounter() {
  counterContainer.textContent = `Counter: ${counterState.value}`;
  increaseButton.classList.toggle("red", isCounterTooBig());
}

increaseButton.addEventListener("click", () => {
  counterState.value += 1
})

resetButton.addEventListener("click", () => {
  counterState.value = 0
})

/**
 * Task:
 * 1. Rewrite to getters and setters+ (VUE2 reactivity)
 * 2. Rewrite using proxy
 * 3. Rewrite using ref and watchEffect from vue
 */