const SERVER = "http://localhost:3000"

$(document).ready(function () {
  const access_token = localStorage.getItem("access_token")

  if (!access_token) {
    $("#login").show()
    $("#register").hide()
    $("#content").hide()
  }
  else {
    $("#login").hide()
    $("#register").hide()
    $("#content").show()
  }

  $("#btn-register").on("click", function () {
    $("#login").hide()
    $("#register").show()
    $("#content").hide()
  })
})

function login(event) {
  event.preventDefault()
  const email = $("#email").val()
  const password = $("#password").val()

  $.ajax({
    method: "POST",
    url: SERVER + "/login",
    data: {
      email: email,
      password: password
    }
  })
  .done(response => {
    const access_token = response.access_token
    localStorage.setItem("access token", access_token)
    afterLogin()
  })
  .fail(err => {
    console.log(err)
  })
}

function register (event) {
  event.preventDefault()
  const nama = $("#nama").val()
  const email = $("#email").val()
  const password = $("#password").val()

  $.ajax({
    method: "POST",
    url: SERVER + "/register",
    data: {
      nama: nama,
      email: email,
      password: password
    }
  })
  .done(response => {
    const access_token = response.access_token
    localStorage.setItem("token", access_token)
    afterRegister()
  })
  .fail(err => {
    console.log(err)
  })
}

function logout () {
  afterLogout()
  localStorage.removeItem("access_token")
}

function afterRegister(){
  $("#login").hide()
  $("#register").hide()
  $("#content").show()
}

function afterLogin(){
  $("#login").hide()
  $("#register").hide()
  $("#content").show()
}

function afterLogout(){
  $("#login").show()
  $("#register").hide()
  $("#content").hide()
}
// OAUTH
function onSignIn(googleUser) {
  var google_access_token = googleUser.getAuthResponse().id_token;

  $.ajax({
    method:'POST',
    url:'http://localhost:3000/login/googleLogin',
    data:{
      google_access_token
    }
  })
  .done(response=>{
    localStorage.setItem('access_token', response.access_token)
    afterLogin()

  })
  .fail(err=>{
    console.log(err)
  })
}

function signOut() {
  console.log("ini token", localStorage.getItem('access_token'));
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  localStorage.removeItem('access_token');
  console.log("ini token", localStorage.getItem('access_token'));
}
//OAUTH