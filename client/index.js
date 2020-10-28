const SERVER = "http://localhost:3000"

$(document).ready(function () {
  const token = localStorage.getItem("token")

  if (!token) {
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
  const username = $("#username").val()
  const password = $("#password").val()

  $.ajax({
    method: "POST",
    url: SERVER + "/login",
    data: {
      username: username,
      password: password
    }
  })
  .done(response => {
    const token = response.token
    localStorage.setItem("token", token)
    $("#login").hide()
    $("#register").hide()
    $("#content").show()
  })
  .fail(err => {
    console.log(err)
  })
}

function register (event) {
  event.preventDefault()
  const name = $("#name").val()
  const username = $("#username").val()
  const password = $("#password").val()

  $.ajax({
    method: "POST",
    url: SERVER + "/register",
    data: {
      name: name,
      username: username,
      password: password
    }
  })
  .done(response => {
    const token = response.token
    localStorage.setItem("token", token)
    $("#login").hide()
    $("#register").hide()
    $("#content").show()
  })
  .fail(err => {
    console.log(err)
  })
}

function logout () {
  $("#login").show()
  $("#register").hide()
  $("#content").hide()
  localStorage.removeItem("token")
}