const boxesEl = document.querySelector('#boxes');
const numberEl = document.querySelector('input')
const renderBtn = document.querySelector('[data-action="render"]');
renderBtn.addEventListener('click', () =>  createBoxes(numberEl.value));

const destroyBtn = document.querySelector('[data-action="destroy"]');
destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    boxesEl.innerHTML = '';
}

function createBoxes(value) {
    destroyBoxes()
    let newBoxes = [];
    for (let i = 0; i < value; i += 1) {
        function getRGB() {
            const r = Math.floor(Math.random() * 255 + 1);
            const b = Math.floor(Math.random() * 255 + 1);
            const g = Math.floor(Math.random() * 255 + 1);
            return [r, g, b];
        }

        const [red, green, blue] = getRGB();
        const newBox = document.createElement('div');
        newBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        newBox.style.width = `${30 + i * 10}px`;
        newBox.style.height = `${30 + i * 10}px`;

        newBoxes.push(newBox);
    }
    boxesEl.append(...newBoxes);
}

 


