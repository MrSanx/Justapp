import {db} from './init.js';
import {setupProfile} from './lawyerProfile.js';
var modal = document.getElementById("profileM");
var span = document.getElementsByClassName("close")[0];

const tabla = document.querySelector('#tabla');

//Crear nuevo espacio cuando se añade un nuevo abogado
function renderLawyer(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let phone = document.createElement ('span');
    let perfilbtn = document.createElement ('button');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name + " " + doc.data().lastName;
    phone.textContent = doc.data().phone;
    perfilbtn.textContent = 'Ver más';
    perfilbtn.setAttribute('href', '#profileM');
    perfilbtn.setAttribute('class', 'modal-trigger')

    li.appendChild(name);
    li.appendChild(phone);
    li.appendChild(perfilbtn);

    tabla.appendChild(li);

    perfilbtn.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        setupProfile(id);
    });
    perfilbtn.onclick = function() 
    {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
}

//Search a specific lawyer
var lawyers=[];
function Lawyer (name, lastName,professionalCard,phone)
{
    this.name=name;
    this.lastName=lastName;
    this.professionalCard=professionalCard;
    this.phone=phone;
}

//Mostrar todos los abogados
db.collection("lawyers").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        renderLawyer(doc);
    });
})

//Buscar abogado
function buscarAbogado()
{
    var id = document.getElementById('search');

    db.collection("lawyers").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           var id2 = doc.id;
           if(id==id2)
           {
            document.getElementById("dato1").innerHTML=`<${doc.data().name}+${doc.data().lastName}+${doc.data().professionalCard}+${doc.data().phone}>`

           }
           else {
            document.getElementById("dato1").innerHTML="No se pudo encontrar su abogado";
           }
        });
    });
}