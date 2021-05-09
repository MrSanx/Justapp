import {db} from './init.js';
import {setupProfile} from './lawyerProfile.js';
let id = localStorage.getItem('ID');
setupProfile(id);

