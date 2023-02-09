//allows us to prevent the default behavior when entering the email and password so we can create our own desired behavior once the values are entered. 
const loginForm= async (event) => {
    event.preventDefault();

    //eliminates trailing and leading space for the entered email and login values 
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log in');
    }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
