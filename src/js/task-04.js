const counterEl = document.getElementById('counter');
const valueEl = document.getElementById('value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener('click', () => {
    let counterValue = productCounter.decrement(1)
    valueEl.textContent = counterValue;
});

const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', () => {
    let counterValue = productCounter.increment(1)
    valueEl.textContent = counterValue;
});

const productCounter = counter();

function counter() {
    let currentValue = 0;

    function increment(value) {
        return (currentValue += value);
    }

    function decrement(value) {
        if (currentValue <= 0) return 0
        return (currentValue -= value);
     
    }

    return {decrement, increment}
}

