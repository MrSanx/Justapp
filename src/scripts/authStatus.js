import {auth} from './init.js';
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in:', user);
        setupUI(user);
    } else {
        setupUI(null);
        console.log('user logged out');

    }
});