const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients')
const ingredientsArray = [];

const createIngredientsList = function (array) {
  for (let ingredient of ingredients) {
    const ingredientListItem = document.createElement('li');
    ingredientListItem.textContent = ingredient;
    ingredientsArray.push(ingredientListItem);
  }
};
createIngredientsList(ingredients);
ingredientsList.append(...ingredientsArray);

