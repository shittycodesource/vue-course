const counterContainer = document.querySelector(".counter");
const increaseButton = document.querySelector(".increase");
const resetButton = document.querySelector(".reset");

const proxyHandler = {
  get(target, prop, reciever) {
    return target[prop];
  },

  set(obj, prop, value) {
    obj[prop] = value;

    renderCounter();

    return true;
  }
}

const proxy = new Proxy({ value: 5 }, proxyHandler)

function isCounterTooBig() {
  return proxy.value > 10;
}

function renderCounter() {
  counterContainer.textContent = `Counter: ${proxy.value}`;
  increaseButton.classList.toggle("red", isCounterTooBig());
}

increaseButton.addEventListener("click", () => {
  proxy.value += 1
})

resetButton.addEventListener("click", () => {
  proxy.value = 0
})

/**
 * Task:
 * 1. +Rewrite to getters and setters (VUE2 reactivity)
 * 2. +Rewrite using proxy
 * 3. Rewrite using ref and watchEffect from vue
 */