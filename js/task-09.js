const colorWidget = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const bodyInfo = document.querySelector('body');

changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  bodyInfo.style.backgroundColor= getRandomHexColor();
  colorWidget.textContent = bodyInfo.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 