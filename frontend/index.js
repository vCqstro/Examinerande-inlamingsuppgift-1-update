// Skapa konto
const usernameElement = document.querySelector('#username');
const emailElement = document.querySelector('#email');
const passwordElement = document.querySelector('#password');
const createButtonElement = document.querySelector('#create-button');
// Logga in
const loginUsernameElement = document.querySelector('#login-username');
const loginPasswordElement = document.querySelector('#login-password');
const loginButtonElement = document.querySelector('#login-button');

async function images() {
    const response = await fetch('http://127.0.0.1:5000/images', {
        method: 'POST',
        body: JSON.stringify(),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

async function login(account) {
    const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        body: JSON.stringify(account),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
    if (data.success == true) {
        window.location.href = "http://localhost:3000/loggedIn"
    } else {
        console.log("Du kunde tyvärr inte logga in!")
    }
}

async function createAccount(account, e) {
    const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        body: JSON.stringify(account),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    console.log("Du har loggats in!");
}

createButtonElement.addEventListener('click', (e) => {
    //skapa objekt med infon i
    let account = {
        username: usernameElement.value,
        email: emailElement.value,
        password: passwordElement.value
    }
    createAccount(account, e);
});

loginButtonElement.addEventListener('click', () => {
    let account = {
        username: loginUsernameElement.value,
        password: loginPasswordElement.value
    }
    login(account);
})