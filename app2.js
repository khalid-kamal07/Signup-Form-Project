

 const email2 = document.querySelector('#email2')
 const password2 = document.querySelector('#password2')

 function loginHandler(){
    if (!password2.value || !email2.value ) return alert ('Please enter passwrd and email')
     
     const allUsers = JSON.parse(localStorage.getItem('allusers')) || []

     const isExist = allUsers.find(function(userData){
        return userData.email.toLowerCase() == email2.value.toLowerCase()
     })
      console.log(isExist)

     if (!isExist) alert('please create your account first')

       if (isExist.password == password2.value) alert ('congratulations you are signing in') 
        else { alert ('Please entert correct password')
    }
     
    const loggedinUser = localStorage.setItem('loggedinUser', JSON.stringify (isExist) )
     
    window.location = 'dashboard.html'

 }