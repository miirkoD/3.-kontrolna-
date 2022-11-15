var params = window.location.search;

var url = new URLSearchParams(params);

var statusDiv = document.getElementById("status");


var User = JSON.parse(localStorage.getItem('users'));

function login() {
    localStorage.removeItem("LoginUser")
    var user = {
        username: document.getElementById("username"),
        password: document.getElementById("password")
    }
    if (User != null) {
        User.forEach(element => {
            if (element.username == user.username.value) {
                statusDiv.innerHTML = "Ulogovan korisnik je " + element.username;
                localStorage.setItem("LoginUser", JSON.stringify(user));
            }
        });
    }
}