var username;

$(document).ready(function(){
    try {
        username = JSON.parse(localStorage.getItem('username'));
        document.getElementById("display-name").innerHTML = username;
    } catch (error) {
        console.log("Username not set")
        document.getElementById("display-name").innerHTML = "Undefined";
    }
});