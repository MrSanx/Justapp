const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const menuEmail = document.querySelector('.menu-email');


const setupUI = (user) => {
    if(user){
        //account info
        const htmlEmail = `<div>${user.email}</div>`;
        menuEmail.innerHTML = htmlEmail;
        //toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display ='none'); 
    } else {
        //hide user info
        menuEmail.innerHTML = '';
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display ='block');
    }
}