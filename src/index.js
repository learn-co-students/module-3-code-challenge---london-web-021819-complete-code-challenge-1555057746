document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2420 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

})

const imageContainer = document.querySelector('.container')

const title = document.getElementById('name')

const likes = document.getElementById('likes')

const commentsBox = document.getElementById('comments')


function addInfo(image) {

  title.innerHTML = `
  ${image.name}
  <br>
  <img src= ${image.url} />
  `

  likes.innerHTML =
  `
  ${image.like_count}
  `
  commentsBox.innerHTML =
  `
  ${image.comments[0].content}
  `

  // ${image.comments.forEach(function(e) { e.content})}
  // getImage().then(image => image.comments.forEach(function(e) {console.log(e)})).content;
  // const comments = getImage().then(image => image.comments.forEach(function(e) {console.log(e)})).content;


  likeBtn = document.getElementById('like_button')

  likeBtn.addEventListener("click", () => {
    image.like_count++
    likes.innerText = `${image.like_count}`
    updateImage(image)
  })



  submitBtn = document.getElementById('submit-button')


  const commentInput = document.getElementById('comment_input')

  submitBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    const content = commentInput.value
    addComment(image, content)
  })
}


function init() {
  getImage()
  .then(image => addInfo(image));
}

init()
