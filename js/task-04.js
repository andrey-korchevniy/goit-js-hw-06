const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = Number(document.querySelector('#value').textContent);

// вешаем слушателя на понижение + отображение результата
decrementBtn.addEventListener('click', () => {
    counterValue -=1;
    changeValueOnScreen(counterValue);
})

// вешаем слушателя на повышение + отображение результата
incrementBtn.addEventListener('click', () => {
    counterValue +=1;
    changeValueOnScreen(counterValue);
})

// функция отображения результата
function changeValueOnScreen (value) {
    document.querySelector('#value').textContent = value;
}