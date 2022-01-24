var Mylogin = "Abdulaziz"
var Mypassword = "1234"

function Show()  {
    var Login = document.getElementById("1inp").value;
    var Password = document.getElementById("2inp").value;
    var h1true = document.getElementById("h1true");
    var h1false = document.getElementById("h1false");

    if (Login === Mylogin && Password === Mypassword) {
        h1true.innerHTML = "You man good job";
    } else {
        h1false.innerHTML = "Oooo Shit man!"
    }


}