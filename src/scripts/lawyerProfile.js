import {db} from './init.js'

const name = document.querySelector('#lawyer-name');
const position = document.querySelector('#lawyer-position');
const city = document.querySelector('#lawyer-city');
const workArea = document.querySelector('#lawyer-workArea');
const description = document.querySelector('#lawyer-description');

export const setupProfile = (id) => {
    db.collection('lawyers').doc(id).get().then(doc => {
        
        const htmlName = `<div>${doc.data().name + ' ' + doc.data().lastName}</div>`;
        const htmlPosition = `<div>${doc.data().position}</div>`;
        const htmlCity = `<div>${doc.data().city}</div>`;
        const htmlWorkArea = `<div>${doc.data().workArea}</div>`;
        const htmlDescription = `<div>${doc.data().description}</div>`;

        name.innerHTML = htmlName;
        position.innerHTML = htmlPosition;
        city.innerHTML = htmlCity;
        workArea.innerHTML = htmlWorkArea;
        description.innerHTML = htmlDescription;       

    })
}