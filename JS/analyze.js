var username;

$(document).ready(function(){
    try {
        username = JSON.parse(localStorage.getItem('username'));
        oldAnalysis = JSON.parse(localStorage.getItem('old_analysis'));
        document.getElementById("display-name").innerHTML = username;
        displayPreviousAnalysis(oldAnalysis);
        console.log(oldAnalysis)

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
        console.log(threadDumpObject["threadId"]);
        try {
            var inner = document.getElementById("old-analysis-tbody").innerHTML;
            var html = 
                '<tr>'+
                    '<td>'+ threadDumpObject["threadId"] +'</td>'+
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