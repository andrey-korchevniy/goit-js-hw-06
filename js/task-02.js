const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// пустой массив для складирования строк отдельных элементов списка
const tagText = [];
// получаем элемент с идентификатором
const listOfIngredients = document.querySelector("#ingredients");

// перебираем массив ингридиентов для создания строк под каждый ингридиент
ingredients.forEach(element => {
  // создаем элемент
  const tagElement = document.createElement("li");
  
  // добавляем текст элементу списка
  tagElement.textContent = element;
  // добавляем класс
  tagElement.classList.add('item');
  // пушим в архив
  tagText.push(tagElement);

});
// вставляем список 
listOfIngredients.prepend(...tagText);
  