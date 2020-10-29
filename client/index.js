const SERVER = "http://localhost:3000"

$(document).ready(function () {
  const token = localStorage.getItem("token")

  if (!token) {
    $("#login").show()
    $("#register").hide()
    $("#content").hide()
    $("#error").hide()
  }
  else {
    $("#login").hide()
    $("#register").hide()
    $("#content").show()
    $("#error").hide()
    fetchData()
  }

  $("#btn-register").on("click", function () {
    $("#login").hide()
    $("#register").show()
    $("#content").hide()
    $("#error").hide()
  })
})

function login(event) {
  event.preventDefault()
  const email = $("#login-email").val()
  const password = $("#login-password").val()

  $.ajax({
    method: "POST",
    url: SERVER + "/login",
    data: {
      email: email,
      password: password
    }
  })
  .done(response => {
    const token = response.access_token
    localStorage.setItem("token", token)    
    afterLogin()
    fetchData()
  })
  .fail(err => {
    showError(err.responseJSON)
  })
}

function register (event) {
  event.preventDefault()
  const nama = $("#register-name").val()
  const email = $("#register-email").val()
  const password = $("#register-password").val()

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
    const token = response.access_token
    localStorage.setItem("token", token)    
    afterRegister()
  })
  .fail(err => {
    showError(err.responseJSON)
  })
}

function showError (error) {
  console.log(error);
  $("#error").show()
  $("#error").empty()
  $("#error").append(`
    <p>${error.msg.join(", ")}</p>
  `)
  setTimeout(() => {
    $("#error").hide()
  }, 3000)
}

function fetchData () {
  const token = localStorage.getItem("token")
  $.ajax({
    method: "GET",
    url: SERVER + "/covid/data",
    headers: {
      token: token
    }
  })
  .done(response => {
    console.log(response)
    let tanggal = new Date(response[1].tanggal).toISOString().substring(0,10)
    let tanggal1 = new Date(response[0].tanggal).toISOString().substring(0,10)
    $("#chart").append(`
      <img src="https://quickchart.io/chart?c={type:'bar',data:{labels:['${tanggal}','${tanggal1}'], datasets:[{label:'meninggal',data:[${response[1].jumlah_meninggal},${response[0].jumlah_meninggal}]},{label:'sembuh',data:[${response[1].jumlah_sembuh},${response[0].jumlah_sembuh}]},{label:'positif',data:[${response[1].jumlah_positif},${response[0].jumlah_positif}]}]}}">
    `)
  })
  .fail(err => {
    showError(err.responseJSON)
  })
}

function logout() {
  afterLogout()
  localStorage.removeItem("token")
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
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
  $("#error").hide()
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
    localStorage.setItem('token', response.access_token)
    afterLogin()

  })
  .fail(err=>{
    showError(err.responseJSON)
  })
}
//END OAUTH
