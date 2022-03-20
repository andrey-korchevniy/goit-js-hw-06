const inputLine = document.querySelector('#font-size-control');
const fontSize = document.querySelector('#text');

inputLine.addEventListener('input', () => {
    fontSize.style.fontSize = inputLine.value+'px';
})