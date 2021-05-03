import {auth} from './init.js';
import {setupUI} from './index.js'
auth.onAuthStateChanged(user => {
    if (user) {
        setupUI(user);
    } else {
        setupUI(null);
        console.log('user logged out');

    }
});