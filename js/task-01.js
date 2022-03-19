const listOfCategories = document.querySelectorAll('#categories .item');

//Выводим на экран количество категорий (длина массива)
console.log(`Number of categories: ${listOfCategories.length}`);
// Пустая строка
console.log(' '); 

// Перебираем категории и для каждой выводим имя и количество элементов
listOfCategories.forEach(category => {
    // получаем массив элементов категории 
    const listOfElements = category.querySelectorAll('ul>li');

    console.log(`Category: ${getNameOfCategory(category)}`);
    console.log(`Elements: ${listOfElements.length}`);
    // Пустая строка
    console.log(' ');
});

// получение имени категории
function getNameOfCategory(category) {
    return category.querySelector('h2').innerText; 
}