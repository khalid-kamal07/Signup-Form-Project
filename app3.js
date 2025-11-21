

 
function profileDetails() {

   const loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'))
   const dbText = document.querySelector('#dbText')

   if (!loggedinUser) {
      window.location = 'login.html'
   }


   dbText.innerHTML = `Hello, MR ${loggedinUser.firstname} ${loggedinUser.lastname}`
   var username = document.querySelector('.card-title')
   var description = document.querySelector('.card-text')
   var firstname = document.querySelector('#one')
   var email = document.querySelector('#two')
   var img = document.querySelector('#dbimg')


   username.textContent = loggedinUser.username.toUpperCase()
   description.textContent = loggedinUser.description || 'No description added'
   firstname.innerHTML = loggedinUser.firstname
   email.innerHTML = loggedinUser.email
   img.src = loggedinUser.img || 'https://ctmirror.org/wp-content/uploads/2021/01/dummy-man-570x570-1.png'

   var inpFirstName = document.querySelector('#inpFirstName')
   var inpLastName = document.querySelector('#inpLastName')
   var inpEmail = document.querySelector('#inpEmail')
   var inpDescription = document.querySelector('#inpDescription')
   var inpPicture = document.querySelector('#inpPicture')


   inpFirstName.value = loggedinUser.firstname
   inpLastName.value = loggedinUser.lastname
   inpEmail.value = loggedinUser.email
   inpDescription.value = loggedinUser.description || []

}

profileDetails()


function logoutHandler() {

   localStorage.removeItem('loggedinUser')
   window.location = 'login.html'

}


function updateProfileHandler() {

   const userDetails = {
      firstname: inpFirstName.value,
      lastname: inpLastName.value,
      email: inpEmail.value,
      description: inpDescription.value,
      img: inpPicture.value
   }
   localStorage.setItem('loggedinUser', JSON.stringify(userDetails))
   console.log(userDetails)

   const allusers = JSON.parse(localStorage.getItem('allusers'))

   const isExist = allusers.find(function(userData){
      return userData.email === userDetails.email
   })


   isExist.firstname = userDetails.firstname
   isExist.lastname = userDetails.lastname
   isExist.email = userDetails.email
   isExist.description = userDetails.description
   isExist.img = userDetails.img

   localStorage.setItem('allusers', JSON.stringify(allusers))

   profileDetails()

}