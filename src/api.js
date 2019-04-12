let imageId = 2420 //Enter the id from the fetched image here

const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

function getImage() {
  return fetch(imageURL)
  .then(resp => resp.json())
}

function updateImage(image) {
  return fetch('https://randopic.herokuapp.com/likes', {
    method: 'POST',
    headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({image_id: imageId})})
  }

  function addComment(image, content) {
    return fetch('https://randopic.herokuapp.com/likes', {
      method: 'POST',
      headers:
      {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({image_id: imageId, content: content})})
    }
