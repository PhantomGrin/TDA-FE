$("#try-sample").click(function (e){
    e.preventDefault();
    localStorage.setItem('sample', 'true');
    const url = "https://gist.githubusercontent.com/PhantomGrin/dd7ba5b154c82de512821f2fe24947e0/raw/f8f327bb76e6c9c25e9d4406c0f4d351f89d6405/sampledump.txt";

    fetch(url)
    .then(response => response.text())
    .then(data => {
        console.log(data);
        analyze_sample(data);
    })
    .catch(error => console.error(error));

});

function analyze_sample(data){
    const url = "http://localhost:8080/trysample"
    var formData  = new FormData();
    formData.append('text',data)

    // var token = JSON.parse(localStorage.getItem('token'));

    fetch(url, {
        method:"POST",
        // headers: {
            // "Authorization": "Bearer "+ token['token']
        // },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("received");
        console.log(data);
        
        localStorage.setItem("analysis_data", JSON.stringify(data));
        window.location.href = "dashboard.html";
    })
    .catch(error => console.error(error));
}