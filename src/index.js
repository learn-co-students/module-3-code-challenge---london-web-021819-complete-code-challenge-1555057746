//needed stuff

const page = document.querySelector("#image_card");
const likeSpan = document.querySelector("#likes");
const commentForm = document.querySelector("#comment_form");

// render image
function renderImage(image) {
  const imgEl = document.querySelector("#image");
  imgEl.src = image.url;

  const imgh4 = document.querySelector("h4");
  imgh4.innerText = image.name;

  likeSpan.innerText = image.like_count;

  addLikesListener(image);
  addComments(image);
}

// increase likes
function addLikesListener(image) {
  const likeButton = document.querySelector("#like_button");
  likeButton.addEventListener("click", () => {
    image.like_count++;
    likeSpan.innerHTML = `${image.like_count}`;
    updateLikes();
    // debugger;
  });
}

function addComments(image) {
  // render comments from db:
  const commentList = document.querySelector("ul");
  image.comments.forEach(comment => {
    commentList.innerHTML += `<li>${comment.content}</li>`;
  });
  // when submit button is pressed, get the new comment and render to the page:
  commentForm.addEventListener("submit", event => {
    event.preventDefault();
    const newLi = document.createElement("li");
    let newComment = document.querySelector("#comment_form").firstElementChild
      .value;
    newLi.innerText = newComment;
    commentList.appendChild(newLi);
    // persist the new comment and clear the form:
    updateComments(newComment);
    commentForm.reset();
  });
}

function init() {
  getImage().then(renderImage);
}

init();
