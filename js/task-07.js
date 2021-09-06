const sizeControl = document.getElementById('font-size-control');
const textEl = document.querySelector('#text');
sizeControl.addEventListener('input', changeTextSize)

function changeTextSize() {
    textEl.style.fontSize = `${ sizeControl.value }px` ;
}