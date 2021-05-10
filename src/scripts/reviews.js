import {db} from './init.js';
import {setupProfile} from './lawyerProfile.js';
const reviewForm = document.querySelector('#review-form');
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

reviewForm.addEventListener("submit",(e) => {
  e.preventDefault();

  //check selected star
  const btnStars = document.querySelectorAll('input[name="rate"]');
  let selectedStar;
  for(const btn of btnStars){
    if(btn.checked){
      selectedStar = btn.value;
      break;
    }
  }
  //check selected type
  const btnTypes = document.querySelectorAll('input[name="reviewType"]');
  let selectedType;
  for(const type of btnTypes){
    if(type.checked){
      selectedType = type.value;
      break;
    }
  }
  //check if recomended



  //create review
  db.collection("lawyers").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
       var id2 = doc.id;
       if(id==id2)
       {
        db.collection('reviews').doc(id).set({
          title: reviewForm['review-title'].value,
          stars: selectedStar,
          type: selectedType,


          
        });
        
       }
       else {
        document.getElementById("dato1").innerHTML="No se pudo encontrar su abogado";
       }
    });
});



})


