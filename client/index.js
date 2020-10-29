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
    $("#login").hide()
    $("#register").hide()
    $("#content").show()
    $("#error").hide()
    fetchData()
  })
  .fail(err => {
    console.log(err)
    showError(err.response)
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
    $("#login").hide()
    $("#register").hide()
    $("#content").show()
  })
  .fail(err => {
    console.log(err)
    showError(err.response.error)
  })
}

function showError (error) {
  $("#error").show()
  $("#error").empty()
  $("#error").append(`
    <p>${error.join(", ")}</p>
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
    console.log(err)
  })
}

function logout () {
  $("#login").show()
  $("#register").hide()
  $("#content").hide()
  $("#error").hide()
  localStorage.removeItem("token")
}