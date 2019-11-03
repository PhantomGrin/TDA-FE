var username;

$(document).ready(function(){
    try {
        userdetails = JSON.parse(localStorage.getItem('user_details'));

        document.getElementById("hello-user").innerHTML = userdetails["firstname"];
        document.getElementById("fname").setAttribute("value", userdetails["firstname"]);
        document.getElementById("lname").setAttribute("value", userdetails["lastname"]);
        document.getElementById("email").setAttribute("value", userdetails["email"]);
        document.getElementById("team").setAttribute("value", userdetails["team"]);
    } catch (error) {
        console.log("Username not set")
    }
});

$("#edit-user").click(function(e){
    e.preventDefault();
    document.getElementById("edit-user").style.opacity = "0";
    document.getElementById("save-user").style.opacity = "1";
    document.getElementById("fname").disabled = false;
    document.getElementById("lname").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("team").disabled = false;
});

$("#save-user").click(function (e){
    e.preventDefault();

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var team = document.getElementById("team").value;

    if(validateName(fname) && validateName(lname) && validateEmail(email) && team.length>=2){
        updateUser(fname, lname, email, team);
    }else{
        throw new Error('Something went wrong');
    }  
});

function updateUser(fname, lname, email, team){
    const url = "http://localhost:8080/user";
    var token = JSON.parse(localStorage.getItem('token'));

    var formData  = {
        "username": email,
        "email": email,
        "firstname": fname,
        "lastname":lname,
        "team":team
    }

    fetch(url, {
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+ token['token']
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.status == 200) {
            console.log("Success")
        }
    })
    .catch(error => console.error(error))
}
