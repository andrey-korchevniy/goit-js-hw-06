 const inputForm = document.querySelector('input');

// Очищаем от цвета рамку формы, если в форме есть фокус
inputForm.addEventListener('focus', ()=> {
    inputForm.classList.remove('valid', 'invalid')
});

// Проверяем длину строки и выбираем нужный класс
 inputForm.addEventListener('blur', () => {
     if(inputForm.value.length == 6) {
         inputForm.classList.add('valid');
     }
     else {inputForm.classList.add('invalid')};
 });