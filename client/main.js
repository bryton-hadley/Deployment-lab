

//selecting the add item html element 
const addComment = document.getElementById('addComment')
const addForm = document.getElementById('addForm')

// selecting the add item 
const comment = document.getElementById('displayComment')



// write a function for my axios request 

function viewComment(res) {
  container.innerHTML = ''
  nameInput.value = ''

  res.data.forEach((comment, index) => {
      container.innerHTML += `<p name=${index}>${comment}</p>`
  })

  document.querySelectorAll('p').forEach(element => {
      const theIndexValue = element.getAttribute('name');

      element.addEventListener('click', () => {
          axios
              .delete(`/api/students/${theIndexValue}`)
              .then(res => {
                  putTheThingInTheView(res)
              })
      })
  })
}

function submitComment(evt) {
  evt.preventDefault();

  axios
      .post('/api/comments', { post: postInput.value })
      .then(res => {
          viewComment(res)
      })
      .catch(err => {
          postInput.value = ''

          const notif = document.createElement('aside')
          notif.innerHTML = `<p>${err.response.data}</p>
          <button class="close">close</button>`
          document.body.appendChild(notif)

          document.querySelectorAll('.close').forEach(btn => {
              btn.addEventListener('click', (e) => {
                  e.target.parentNode.remove()
              })
          })
      })
}

// get student list on initial load
axios
  .get('/api/comments')
  .then(res => {
      putTheThingInTheView(res)
  })
  .catch((err) => {
      console.log(err)
  })

addForm.addEventListener('submit', submitHandler)
  // function lightTheme() {
  //   imageSection.classList.remove("image-container");

  // }
  
  // function darkTheme() {
  //   imageSection.classList.add("image-container");
    
  
  // }
  
  // var lightThemeBtn = document.querySelector("#Lucario");
  // var darkThemeBtn = document.querySelector("#clear");
  
  // lightThemeBtn.addEventListener("click", lightTheme);
  // darkThemeBtn.addEventListener("click", darkTheme);
  

console.log('YOU ARE DE BEST')