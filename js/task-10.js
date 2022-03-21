// получаем доступ: поле ввода, кнопки, объект рисования
const formInput = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesArea = document.querySelector('#boxes');
let valueOfInput; // значение переменной в поле

formInput.addEventListener('input', getNubmer);
createBtn.addEventListener('click', getCreate);
destroyBtn.addEventListener('click', destroyBoxes);

// получаем значение поля с номером
function getNubmer() {
  valueOfInput = formInput.value;
}

// генератор цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// обрабатыаем событие создание
function getCreate() {
  createBoxes(valueOfInput);
}

// убираем нарисованное
function destroyBoxes() {
  const childsBoxes = boxesArea.querySelectorAll('div');
  childsBoxes.forEach(element => {
    element.remove('div');
  });
}

// рисуем квадраты
function createBoxes(amount) {
  const arr = [];
  for (let i = 0; i < amount; i++) {
    arr[i] = document.createElement('div');
    arr[i].style.width = (30 + i * 10) + 'px';
    arr[i].style.height = (30 + i * 10) + 'px';
    arr[i].style.backgroundColor = getRandomHexColor();    
  }
    boxesArea.prepend(...arr);
}