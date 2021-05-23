import {db} from './init.js';
const discussionForm = document.querySelector('#discussion-form');
let date = new Date();
let formattedDate = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear() + '/' + date.getHours() + ':' + date.getMinutes();

discussionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const txtTitle = document.querySelector('#discussion-title');
    let discussionTitle = txtTitle.value;

    const txtArea = document.querySelector('#discussion-experience');
    let txtExperience = txtArea.value;


    db.collection('discussions').doc().set({
        title: discussionTitle,
        experience: txtExperience,
        date: formattedDate 
    });
    

})
// Get the modal
var modal = document.getElementById("newDiscussion");
var btn = document.getElementById("newDiscussion-btn");
var span = document.getElementsByClassName("close")[0];
var btnPublicar = document.getElementById("btn-publicar");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
btnPublicar.onclick = function(){
    modal.style.display = "none";
}



