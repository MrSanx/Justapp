var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

console.log(threads);
var container = document.querySelector('ol');
for (let thread of threads) {
    var html = `
    <li class="row">
        <a href="../webapp/thread.html">
            <h4 class="title">
                ${thread.title}
            </h4>
            <div class="bottom">
                <p class="timestamp">
                    ${new Date(thread.date).toLocaleString()}
                </p>
                <p class="comment-count">
                    ${thread.comments.length} comments
                </p>
            </div>
        </a>
    </li>
    `
    container.insertAdjacentHTML('beforeend', html);
}

// Get the modal
var modal = document.getElementById("newDiscussion");

// Get the button that opens the modal
var btn = document.getElementById("newDiscussion-btn");

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