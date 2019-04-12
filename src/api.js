let imageId = 2414; //Enter the id from the fetched image here

const imageURL = `https://randopic.herokuapp.com/images/${imageId}`;

const likeURL = `https://randopic.herokuapp.com/likes/`;

const commentsURL = `https://randopic.herokuapp.com/comments/`;

//get image
function getImage() {
  return fetch(imageURL).then(resp => resp.json());
}

// update stuff
function updateLikes() {
  return fetch(likeURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      image_id: 2414
    })
  }).then(resp => resp.json());
}

// update comments
function updateComments(newComment) {
  //   debugger;
  return fetch(commentsURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      image_id: 2414,
      content: newComment
    })
  }).then(resp => resp.json());
}
