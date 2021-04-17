//listen for authentication status changes
/*
auth.onAuthStateChanged(user =>{
    if(user){
        console.log('El usuario inició sesión ', user);
    }   
    else{
        console.log('El usuario cerró sesión');
    }
});
*/


//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    //user sign up
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            name: signupForm['signup-name'].value
        });
    }).then(() => {
        //what happens when the user signs up
        window.location.href = '../webapp/index.html';
        signupForm.reset();
    });
});

/*
//logout
const logout = document.querySelector('INSERTAR EL ID DEL BOTON DE LOGOUT');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});


//login
const loginForm = document.querySelector('INSERTAR EL ID DEL FORM DE LOGIN');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //get user info
    const email = loginForm['INSERTAR EL ID DEL CAMPO DE TEXTO DEL EMAIL'].value;
    const password = loginForm['INSERTAR EL ID DEL CAMPO DE TEXTO DE LA CONTRASEÑA'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        //what happens when the user logs in
    });
});
*/
