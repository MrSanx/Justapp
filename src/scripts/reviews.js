import {db} from './init.js';
import {setupProfile} from './lawyerProfile.js';
// Genera perfil
let id = localStorage.getItem('ID');
setupProfile(id);

// Get the modal
var modal = document.getElementById("profileM");

// Get the button that opens the modal
var btn = document.getElementById("profileM-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

function addReviewAbogado ()
{
    id = document.getElementById("abogado");

    db.collection("lawyers").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           var id2 = doc.id;
           if(id==id2)
           {
            var abogado = document.getElementById("abogado");
            var review = document.getElementById("review");
            var arreglo = new reviews (abogado,review);
            reviews[cantReviews]=arreglo;
            cantReviews=cantReviews+1;
            db.collection('reviews').add(review);
           }
           else {
            document.getElementById("dato1").innerHTML="No se pudo encontrar su abogado";
           }
        });
    });
}