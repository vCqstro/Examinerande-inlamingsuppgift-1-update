// Skapa konto
const usernameElement = document.querySelector('#username');
const emailElement = document.querySelector('#email');
const passwordElement = document.querySelector('#password');
const createButtonElement = document.querySelector('#create-button');
// Logga in
const loginUsernameElement = document.querySelector('#login-username');
const loginPasswordElement = document.querySelector('#login-password');
const loginButtonElement = document.querySelector('#login-button');

async function login(account) {
    const response = await fetch('http://127.0.0.1:5500/frontend/index.html', {
        method: 'POST',
        body: JSON.stringify(account),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);

    if (data.success) {
        sessionStorage.setItem('token', data.token);
        window.location.href = 'loggedIn.html';
    }

}

async function createAccount(account) {
    const response = await fetch('http://127.0.0.1:5500/frontend/index.html', {
        method: 'POST',
        body: JSON.stringify(account),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

createButtonElement.addEventListener('click', () => {
    // Skapa ett objekt med information i
    let account = {
        username: usernameElement.value,
        email: emailElement.value,
        password: passwordElement.value
    }
    createAccount(account);
});

loginButtonElement.addEventListener('click', () => {
    let account = {
        username: loginUsernameElement.value,
        password: loginPasswordElement.value
    }
    login(account);
})