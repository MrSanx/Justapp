import {db} from './init.js';
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
var tabla = document.getElementById('tabla');
db.collection("lawyers").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.uid} => ${doc.data()}`);
        tabla.innerHTML+=`
        <tr>
        <td>${doc.data().name}</td>
        <td>${doc.data().lastName}</td>
        <td>${doc.data().professionalCard}</td>
        <td>${doc.data().phone}</td>
      </tr>
      `
    });
});

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