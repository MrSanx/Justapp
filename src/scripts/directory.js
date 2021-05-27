import {db} from './init.js';
const btnFiltrar = document.querySelector("#btnPruebaFiltrado");


let tabla = document.querySelector('#tabla');

//Crear nuevo espacio cuando se añade un nuevo abogado
function renderLawyer(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let phone = document.createElement ('span');
    let perfilbtn = document.createElement ('a');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name + " " + doc.data().lastName;
    phone.textContent = doc.data().phone;
    perfilbtn.textContent = 'Ver más';
    perfilbtn.setAttribute('href', 'lawyerProfile.html');
    perfilbtn.setAttribute('class', 'btn-choice');

    li.appendChild(name);
    li.appendChild(phone);
    li.appendChild(perfilbtn);

    tabla.appendChild(li);

    perfilbtn.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        localStorage.setItem('ID', id);
    });
}


//Mostrar todos los abogados
db.collection("lawyers").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        renderLawyer(doc);
    });
})

//prueba filtrado
btnFiltrar.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("funcionando");
    db.collection("lawyers").where("name","==","Daniel").onSnapshot((querySnapshot) => {
        tabla.innerHTML='';
        querySnapshot.forEach((doc) => {
            renderLawyer(doc);
        });
    })
})