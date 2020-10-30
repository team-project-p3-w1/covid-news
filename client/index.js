const SERVER = "http://localhost:3000"

$(document).ready(function () {
  const token = localStorage.getItem("token")
  if (!token) {
    $("#login").show()
  }
  else {
    $("#login").hide()
    afterLogin()
    
  }
  $("#btn-register").on("click", function () {
    $("#login").hide()
    $("#register").show()
  })


  fetchCovidData()

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
      $(".user").html(response.nama)
      afterLogin()
      
    })
    .fail(err => {
      showError(err.responseJSON)
    })
}

function register(event) {
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

function showError(error) {
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

function fetchData() {
  $("#chart").empty()
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
      let tanggal = new Date(response[1].tanggal).toISOString().substring(0, 10)
      let tanggal1 = new Date(response[0].tanggal).toISOString().substring(0, 10)
      $("#chart").append(
        //<img style="width:600px" src="https://quickchart.io/chart?c={type:'pie',data:{labels:['Meninggal','Sembuh','Positif'], datasets:[{data:[${response[1].akumulasi_meninggal},${response[1].akumulasi_sembuh},${response[1].akumulasi_positif}]} ]} }">
        `<img style="width:600px" src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Kemarin','Hari ini'], datasets:[{label:'meninggal',data:[${response[1].jumlah_meninggal},${response[0].jumlah_meninggal}]},{label:'sembuh',data:[${response[1].jumlah_sembuh},${response[0].jumlah_sembuh}]},{label:'positif',data:[${response[1].jumlah_positif},${response[0].jumlah_positif}]}]}}">`
      )
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
function afterRegister() {
  $("#login").hide()
  $("#register").hide()
  $("#content").show()
}
function afterLogin() {
  $("#login").hide()
  $("#register").hide()
  $(".navbar").show()
  $("#content").show()
  $("#footer").css({ "display": "flex" })
  $("#chart").css({ "display": "flex" })
  $("#covidData").show()
  $("error").hide()
  fetchData()
  fetchNews()
}
function afterLogout() {
  const email = $("#login-email").val('')
  const password = $("#login-password").val('')
  $("#login").show()
  $("#chart").hide()
  $(".navbar").hide()
  $("#covidData").hide()
  $("#register").hide()
  $("#content").hide()
  $("#error").hide()
}
function showLogin() {
  $("#login").show()
  $("#register").hide()
}

// OAUTH
function onSignIn(googleUser) {
  var google_access_token = googleUser.getAuthResponse().id_token;

  $.ajax({
    method: 'POST',
    url: SERVER + '/login/googleLogin',
    data: {
      google_access_token
    }
  })
    .done(response => {
      localStorage.setItem('token', response.access_token)
      $(".user").html(response.nama)
      afterLogin()
    })
    .fail(err => {
      showError(err.responseJSON)
    })
}
//END OAUTH

// FETCH NEWS
function fetchNews() {

  $.ajax({
    method: "GET",
    url: SERVER + "/news"
  })
    .done(response => {
      response.forEach(news => {
        let tanggalRaw = new Date(news.tanggal_terbit)
        let tanggal = tanggalRaw.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
        $(".modal-news-title").html(news.judul)
        $('.news-container').append(`
        <div class="col-6">
          <div class="news-card" onclick="showDetails('${news.link}')">
            <h3 class="news-title">${news.judul}</h3>
            <p class="news-desc">
              ${news.description}
            </p>
            <div class="news-footer">
              <div class="author"> ${news.penulis} @ ${news.sumber} </div>
              <div class="published-date">${tanggal}</div>
            </div>
          </div>
        </div>
      `)
      })
    })
    .fail(err => {
      showError(err.responseJSON)
    })
}
// END FETCH NEWS

function showDetails(link) {
  $("#newsModal").modal('show')
  $(".news-iframe").html(`
    <iframe src="${link}" name="targetframe" allowTransparency="true" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%" >
    </iframe>
  `)
}

function fetchCovidData() {
  $.ajax({
    method: "GET",
    url: SERVER + "/covid/data"
  }).done(response => {
    let tanggalRaw = new Date(response[1].tanggal)
    let tanggal = tanggalRaw.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
    $(".d-positif").html(response[1].akumulasi_positif)
    $(".d-sembuh").html(response[1].akumulasi_sembuh)
    $(".d-meninggal").html(response[1].akumulasi_meninggal)
    $(".date-info").html(tanggal)
  })
}

function toggleDark() {
  let tgbtn = $(".toggle-btn")

  if (tgbtn.text() == "Mode Gelap") {
    $('body').css({ "background-color": "#22272C", "color": "#fff" })
    $(".news-card").css({ "background-color": "#2E343B" })
    $(".covid-card-body").css({ "background-color": "#2E343B" })
    tgbtn.text("Mode Terang")
  } else {
    $('body').css({ "background-color": "#F1F2F3", "color": "#2b2b2b" })
    $(".news-card").css({ "background-color": "#fff" })
    $(".covid-card-body").css({ "background-color": "#fff" })
    tgbtn.text("Mode Gelap")
  }

}