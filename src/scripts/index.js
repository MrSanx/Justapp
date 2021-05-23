import {db} from './init.js';
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const menuEmail = document.querySelector('.menu-email');
const menuName = document.querySelector('.menu-name');


export const setupUI = (user) => {
    if(user){
        //account info
        db.collection('clients').doc(user.uid).get().then(doc => {
            const htmlEmail = `
                <div>${user.email}</div>
            `;
            const htmlMenuName = `
                <div>${doc.data().name + ' ' + doc.data().lastName}</div>
            `;
            menuEmail.innerHTML = htmlEmail;
            menuName.innerHTML = htmlMenuName;
            localStorage.setItem('userName', doc.data().name + ' ' + doc.data().lastName);
        }).catch(err => {
            console.error()
        })
        db.collection('lawyers').doc(user.uid).get().then(doc => {
            const htmlEmail = `
                <div>${user.email}</div>
            `;
            const htmlMenuName = `
                <div>${doc.data().name + ' ' + doc.data().lastName}</div>
            `;
            menuEmail.innerHTML = htmlEmail;
            menuName.innerHTML = htmlMenuName;
            localStorage.setItem('userName', doc.data().name + ' ' + doc.data().lastName);
        }).catch(err => {
            console.error()
        })
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