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
        return db.collection('lawyers').doc(cred.user.uid).set({
            name: signupForm['signup-name'].value,
            lastName: signupForm['signup-lastName'].value,
            professionalCard: signupForm['signup-professionalCard'].value,
            phone: signupForm['signup-phone'].value
        });
    }).then(() => {
        //what happens when the user signs up
        window.location.href = '../webapp/index.html';
        signupForm.reset();
    });
});
