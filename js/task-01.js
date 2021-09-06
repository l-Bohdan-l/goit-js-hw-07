
const allItem = document.querySelectorAll('.item');

const allItemLenght = allItem.length

console.log(`В списке ${allItemLenght} категории.`);

///////////////////////////////////////////////////////////


const getCategoriesChildren = function (array) {
    array.forEach(item => console.log(`- Категория: ${item.firstElementChild.textContent} \n- Количество элементов: ${item.lastElementChild.children.length}`));
}

getCategoriesChildren(allItem);


/////////// вариант Ментора //////////////

// const list = document.querySelector('#categories');
// const items = list.querySelectorAll('.item');
// console.log(`В списке ${items.length} категории:`);
// items.forEach(node => {
// const h2 = node.querySelector('h2');
// const nodeItems = node.querySelectorAll('li');
// console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
// });