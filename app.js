
const username = document.querySelector('#username')
const firstname = document.querySelector('#firstname')
const lastname = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

function signupHandler() {
    var allusers = JSON.parse(localStorage.getItem('allusers')) || []
    
    if (!username.value || !firstname.value || !lastname.value || !email.value || !password.value || !cpassword.value) { alert('please fill all the inputs') }
    if (password.value != cpassword.value) return alert('confirm password should be match')

    if (password.value.length < 8) alert('password should be atleast 8 characters')


    const userDetails = {
        username: username.value,
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
    }
    console.log(userDetails)

    allusers.push(userDetails)

    localStorage.setItem('allusers', JSON.stringify(allusers))

    window.location = 'login.html'

}