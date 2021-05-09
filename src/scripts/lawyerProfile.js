import {db} from './init.js'

const name = document.querySelector('#lawyer-name');
const position = document.querySelector('#lawyer-position');
const city = document.querySelector('#lawyer-city');
const workArea = document.querySelector('#lawyer-workArea');
const description = document.querySelector('#lawyer-description');

export const setupProfile = (id) => {
    db.collection('lawyers').doc(id).get().then(doc => {
        
        const htmlName = `${doc.data().name + ' ' + doc.data().lastName}`;
        const htmlPosition = `${doc.data().position}`;
        const htmlCity = `${doc.data().city}`;
        const htmlWorkArea = `Area objetivo: <br>${doc.data().workArea}`;
        const htmlDescription = `${doc.data().description}`;

        name.innerHTML = htmlName;
        position.innerHTML = htmlPosition;
        city.innerHTML = htmlCity;
        workArea.innerHTML = htmlWorkArea;
        description.innerHTML = htmlDescription;       

    })
}