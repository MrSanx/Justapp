//listen for authentication status changes
auth.onAuthStateChanged(user =>{
    if(user){
        console.log('El usuario inició sesión ', user);
    }   
    else{
        console.log('El usuario cerró sesión');
    }
});


//signup
const signupForm = document.querySelector('INSERTAR ID DEL FORM DE SIGNUP');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['INSERTAR ID DEL CAMPO DE TEXTO DEL EMAIL'].value;
    const password = signupForm['INSERTAR ID DEL CAMPO DE TEXTO DE LA CONTRASEÑA'].value;

    //user sign up
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        //what happens when the user signs up
        signupForm.reset();
    })
})


//logout
const logout = document.querySelector('INSERTAR EL ID DEL BOTON DE LOGOUT');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
})


//login
const loginForm = document.querySelector('INSERTAR EL ID DEL FORM DE LOGIN');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //get user info
    const email = loginForm['INSERTAR EL ID DEL CAMPO DE TEXTO DEL EMAIL'].value;
    const password = loginForm['INSERTAR EL ID DEL CAMPO DE TEXTO DE LA CONTRASEÑA'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        //what happens when the user logs in
    })
})

