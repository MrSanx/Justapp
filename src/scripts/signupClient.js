import {auth,db} from './init.js';
//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    //user sign up
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('clients').doc(cred.user.uid).set({
            name: signupForm['signup-name'].value,
            lastName: signupForm['signup-lastName'].value
        });
    }).then(() => {
        //what happens when the user signs up
        window.location.href = '../webapp/index.html';
        signupForm.reset();
    }).catch(err =>{
        console.log(err);
        if(err.code == "auth/weak-password")
        window.alert("La contraseña debe tener al menos 6 caracteres");

        if(err.code == "auth/wrong-password")
        window.alert("La contraseña ingresada no es correcta");

        if(err.code == "auth/too-many-requests"){
        window.alert("Se han registrado demasiados intentos por lo tanto se ha blockeado el ingreso a esta cuenta, intente mas tarde")
        }
    });
});
