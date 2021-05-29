import {db} from './init.js'

const name = document.querySelector('#lawyer-name');
const position = document.querySelector('#lawyer-position');
const city = document.querySelector('#lawyer-city');
const workArea = document.querySelector('#lawyer-workArea');
const description = document.querySelector('#lawyer-description');
const reviewName = document.querySelector('#review-lawyer-name');
const reviewCity = document.querySelector('#review-lawyer-city');
const reviewPositionWorkarea = document.querySelector('#review-lawyer-position-workArea');
const btnLawyerMail = document.querySelector('#lawyer-mail');
let id = localStorage.getItem('ID');

let tabla = document.querySelector('#tabla');

export const setupProfile = (id) => {
    db.collection('lawyers').doc(id).get().then(doc => {
        
        const htmlName = `${doc.data().name + ' ' + doc.data().lastName}`;
        const htmlPosition = `${doc.data().position}`;
        const htmlCity = `${doc.data().city}`;
        const htmlWorkArea = `${doc.data().workArea}`;
        const htmlDescription = `${doc.data().description}`;

        name.innerHTML = htmlName;
        reviewName.innerHTML = htmlName;
        reviewCity.innerHTML = htmlCity;
        reviewPositionWorkarea.innerHTML = htmlPosition +" / "+ `${doc.data().workArea}`;
        position.innerHTML = htmlPosition;
        city.innerHTML = htmlCity;
        workArea.innerHTML = htmlWorkArea;
        description.innerHTML = htmlDescription;
        btnLawyerMail.setAttribute('href', `mailto:${doc.data().email}?Subject=Interesado%20en%20sus%20servicios%20(VIA-JUSTAP)`); 

    })
}

db.collection("reviews").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        if(id==doc.data().lawyerId){
            renderReview(doc);
        }
    });
})
//render review table
function renderReview(doc){
    let li = document.createElement('li');
    let title = document.createElement('span')
    let stars = document.createElement('span');
    let type = document.createElement ('span');
    let experience = document.createElement ('span');

    title.setAttribute('id', 'review-table-title');
    stars.setAttribute('id', 'review-table-stars');
    type.setAttribute('id', 'review-table-type');
    experience.setAttribute('id', 'review-table-experience');
    

    li.setAttribute('data-id', doc.id);
    title.textContent = doc.data().title;
    stars.textContent = "Calificación: " + doc.data().stars;
    type.textContent = doc.data().type;
    experience.textContent = doc.data().experience;

    li.appendChild(title);
    li.appendChild(stars);
    li.appendChild(type);
    li.appendChild(experience);

    tabla.appendChild(li);
}
