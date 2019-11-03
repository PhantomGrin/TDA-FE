var username;

$(document).ready(function(){
    try {
        username = JSON.parse(localStorage.getItem('username'));
        oldAnalysis = JSON.parse(localStorage.getItem('old_analysis'));
        document.getElementById("display-name").innerHTML = username;
        displayPreviousAnalysis(oldAnalysis);

        $('#old-analysis').DataTable(
            {
              "lengthChange": false,
              "pageLength": 5
            }
        );
    } catch (error) {
        console.log("Username not set")
        document.getElementById("display-name").innerHTML = "Undefined";
    }
});

function displayPreviousAnalysis(array){
    array.forEach(threadDumpObject => {
        try {
            var inner = document.getElementById("old-analysis-tbody").innerHTML;
            var html = 
                '<tr>'+
                    '<td class="id-data">'+ threadDumpObject["threadId"] +'</td>'+
                    '<td>'+ threadDumpObject["name"] +'</td>'+
                    '<td>'+ threadDumpObject["date"] +'</td>'+
                    '<td>'+ threadDumpObject["date"] + '</td>'+
                    '<td class="button-group-wrapper justify-content-center justify-content-md-center">'+
                        '<div class="joption-button-group ustify-content-center justify-content-md-center">'+
                            '<button class="option-buttons view-analysis-button" data-toggle="tooltip" data-placement="top" title="View Analysis"><i class="fas fa-external-link-alt"></i></button>'+
                            '<button class="option-buttons share-analysis-button" data-toggle="tooltip" data-placement="top" title="Share Analysis"><i class="fas fa-share-alt"></i></button>'+
                            '<button class="option-buttons delete-analysis-button" data-toggle="tooltip" data-placement="top" title="Delete Analysis"><i class="fas fa-trash"></i></button>'+
                        '</div>'+
                    '</td>'+
                '</tr>';

            document.getElementById("old-analysis-tbody").innerHTML = inner + html;
            
        } catch (error) {
            console.log(error)
        }
        
    });
}

$("body").on("click", ".view-analysis-button", function(){
    var value = $(this).closest("tr").find('td')[0].innerHTML;
    // alert(value);
    getSelectedAnalysis(value);
});

function getSelectedAnalysis(id){
    const url = `http://localhost:8080/getresult?id=${id}`;
    var token = JSON.parse(localStorage.getItem('token'));

   

    console.log(token['token']);
    
    fetch(url, {
        method:"GET",
        headers: {
            "Authorization": "Bearer "+ token['token']
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else{
            throw new Error('Something went wrong');
        }
    })
    .then(data => {
        console.log(data);
        localStorage.setItem("analysis_data", JSON.stringify(data));
        window.location.href = "dashboard.html";
    })
    .catch(error => console.error(error))
}
