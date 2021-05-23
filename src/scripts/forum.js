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
    discussionForm.reset();
    

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

//------------------------------------------------------------------------------------------------
let tabla = document.querySelector('#tabla');
db.collection("discussions").onSnapshot((querySnapshot) => {
  tabla.innerHTML='';
  querySnapshot.forEach((doc) => {
      renderDiscussion(doc);
  });
})
//render review table
function renderDiscussion(doc){
  let li = document.createElement('li');
  let title = document.createElement('a')
  let experience = document.createElement ('span');
  let date = document.createElement ('span');

  title.setAttribute('id', 'discussion-table-title');
  title.setAttribute('href', 'thread.html');
  experience.setAttribute('id', 'discussion-table-experience');
  date.setAttribute('id', 'discussion-table-date');
  

  li.setAttribute('data-id', doc.id);
  title.textContent = doc.data().title;
  date.textContent = doc.data().date;
  experience.textContent = doc.data().experience;
  

  li.appendChild(title);
  li.appendChild(date);
  li.appendChild(experience);
  

  tabla.appendChild(li);

  title.addEventListener('click', (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    localStorage.setItem('discussionID', id);
  });
}



