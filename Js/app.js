/*
    1. "submit" event
    - 폼을 서버로 전송하기 전에 내용을 검증
    - 폼 전송을 취소

    2. function
    [기본]
    function functionName(argument) {}
    [다른 형식]
    
*/

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function paintGreetings(event) {
    greeting.innerText = `Have a good day, ${event}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();

    loginForm.classList.add('hidden');
    const username = loginInput.value;
    localStorage.setItem('username', username);
    paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
