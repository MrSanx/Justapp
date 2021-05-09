import {auth} from './init.js';
//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        window.location.href = '../webapp/index.html';
    }).catch(err =>{
        console.log(err);
        if(err.code == "auth/user-not-found")
        window.alert("El usuario ingresado no existe");

        if(err.code == "auth/wrong-password")
        window.alert("La contraseña ingresada no es correcta");

        if(err.code == "auth/too-many-requests"){
        window.alert("Se han registrado demasiados intentos por lo tanto se ha blockeado el ingreso a esta cuenta, intente mas tarde")
        }
    });
});