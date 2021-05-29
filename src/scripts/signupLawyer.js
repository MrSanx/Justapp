import {auth,db} from './init.js';
//signup
const signupForm = document.querySelector('#signup-form');
let workAreaSelections = document.querySelector('#signup-workArea')
let workAreaSelected = '';

workAreaSelections.addEventListener('change', () => {
    workAreaSelected = workAreaSelections.options[workAreaSelections.selectedIndex].value;
    console.log(workAreaSelected);
});


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    let signupGender = document.querySelector('input[name="genero"]:checked').value;

    if(workAreaSelected != ''){
        //user sign up
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            return db.collection('lawyers').doc(cred.user.uid).set({
                name: signupForm['signup-name'].value,
                lastName: signupForm['signup-lastName'].value,
                professionalCard: signupForm['signup-professionalCard'].value,
                phone: signupForm['signup-phone'].value,
                gender: signupGender,
                experience: signupForm['signup-experience'].value,
                position: signupForm['signup-position'].value,
                workArea: workAreaSelected,
                city: signupForm['signup-city'].value,
                email: email,
                description: signupForm['signup-description'].value
            });
        }).then(() => {
            //what happens when the user signs up
            window.location.href = '../webapp/index.html';
            signupForm.reset();
        });
    }else{
        window.alert("Por favor seleccione una especialización")
    }

});
