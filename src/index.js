//needed stuff

const page = document.querySelector("#image_card");

// render image
function renderImage(image) {
  page.innerHTML = `
  
          <img src="${image.url}" id="image" data-id="${image.id}" />
          <h4 id="name">${image.name}</h4>
          <span
            >Likes:
            <span id="likes">${image.like_count}</span>
          </span>
          <button id="like_button">Like</button>
          <form id="comment_form">
            <input
              id="comment_input"
              type="text"
              name="comment"
              placeholder="Add Comment"
            />
            <input type="submit" value="Submit" />
          </form>
          <ul id="comments">
            <!-- <li> for each comment goes here -->
          </ul>
          
        
  `;
  addLikesListener(image);
  addComments(image);
}

function addLikesListener(image) {
  // increase likes
  const likeButton = document.querySelector("#like_button");
  const likeSpan = document.querySelector("#likes");
  likeButton.addEventListener("click", () => {
    image.like_count++;
    likeSpan.innerHTML = `${image.like_count}`;
    updateLikes();
  });
}

function addComments(image) {
  const commentForm = document.querySelector("#comment_form");
  const commentList = document.querySelector("ul");
  commentForm.addEventListener("submit", event => {
    event.preventDefault();
    const newLi = document.createElement("li");
    newLi.innerText = document.querySelector(
      "#comment_form"
    ).firstElementChild.value;
    commentList.appendChild(newLi);
    commentForm.reset();
  });
  // add the comments to the image.comments array?
}

function init() {
  getImage().then(renderImage);
}

init();
