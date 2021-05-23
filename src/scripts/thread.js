import {db} from './init.js';

const commentForm = document.getElementById('comment-form');
let discussionID = localStorage.getItem('discussionID');
let userName = localStorage.getItem('userName');
let threadTitle = document.getElementById('thread-title');
let commentText = document.getElementById('comment-textarea');
let tabla = document.querySelector('#tabla');
//let threadExperience = document.getElementById('thread-experience');

db.collection('discussions').doc(discussionID).get().then(doc => {
        
    const htmlTitle = `${doc.data().title}`;
    //const htmlExperience = `${doc.data().experience}`;

    //threadExperience.innerHTML = htmlExperience;
    threadTitle.innerHTML = htmlTitle;
});

commentForm.addEventListener("submit",(e) => {
    e.preventDefault();
    db.collection("discussions").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           var id2 = doc.id;
           if(discussionID==id2)
           {
            db.collection('comments').doc().set({
              userName: userName,
              comment: commentText.value,
              discussionId: discussionID          
            });
           }
        });
    });
});

db.collection("comments").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        if(discussionID==doc.data().discussionId){
            renderReview(doc);
        }
    });
})

function renderReview(doc){
    let li = document.createElement('li');
    let userName = document.createElement('span')
    let comment = document.createElement ('span');

    userName.setAttribute('id', 'comment-table-userName');
    comment.setAttribute('id', 'comment-table-comment');
    

    li.setAttribute('data-id', doc.id);
    userName.textContent = doc.data().userName;
    comment.textContent = doc.data().comment;

    li.appendChild(userName);
    li.appendChild(comment);

    tabla.appendChild(li);
}


