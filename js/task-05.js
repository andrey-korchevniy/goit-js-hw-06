const inputPlace = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

inputPlace.addEventListener('input', (event) => {
    nameOutput.textContent = event.currentTarget.value;
    if(!event.currentTarget.value) {nameOutput.textContent = 'Anonymus'};
});