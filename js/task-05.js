const inputEl = document.getElementById('name-input');
inputEl.addEventListener('input', () => addName());

const outputEl = document.getElementById('name-output');

function addName() {
    let name = inputEl.value;
    if (name === '') {
        outputEl.textContent = 'незнакомец';
    } else {
        outputEl.textContent = name;
    }

}