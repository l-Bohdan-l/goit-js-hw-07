
const allItem = document.querySelectorAll('.item');

const allItemLenght = allItem.length

console.log(`В списке ${allItemLenght} категории.`);

///////////////////////////////////////////////////////////


const getCategoriesChildren = function (array) {
    array.forEach(item => console.log(`- Категория: ${item.firstElementChild.textContent} \n- Количество элементов: ${item.lastElementChild.children.length}`));
}

getCategoriesChildren(allItem);