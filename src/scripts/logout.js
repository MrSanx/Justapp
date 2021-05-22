import {auth} from './init.js';

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    window.location.href = '../webapp/index.html';
});