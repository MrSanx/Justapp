import {auth,db} from './init.js';
//signup
var reviews =[];
var cantReviews=0;
function review (abogado,review)
{
    this.abogado=abogado
    this.review=review
} 

function addReviewAbogado ()
{
    var id = document.getElementById("abogado");

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
function addReview()
{

   db.collection('reviews').add();
}
