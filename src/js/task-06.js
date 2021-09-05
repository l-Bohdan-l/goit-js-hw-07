const inputEl = document.getElementById('validation-input');
const inputValidationLength = Number(inputEl.getAttribute('data-length'));
inputEl.addEventListener('blur', validationCheck);

function validationCheck() {
    let inputElLength = inputEl.value.length;
    if (inputValidationLength === inputElLength) {
        inputEl.classList.remove = ('invalid');
        inputEl.classList = ('valid');
    } else {
        inputEl.classList.remove = ('valid');
        inputEl.classList = ('invalid');
    }
}




