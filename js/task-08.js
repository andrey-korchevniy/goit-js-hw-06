const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', onSubmit);

function onSubmit() {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Все поля должны быть заполнены')
    }
    else {
        const formForSend = {
            email: email.value,
            password: password.value
        };
        console.log(formForSend);
        event.currentTarget.reset();
    }

}

