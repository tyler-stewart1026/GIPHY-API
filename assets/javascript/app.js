// global Var's here. 



// create click event to register our search box to search variable
$('.searchbtn').on("click", function () {

    // create Var to hold search term 
    var search = $('#searchBar').val().trim()
    
    // use AJAX to get API info from GIPHY
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&limit=8&rating=g&api_key=zeDT6SboXDp0gp0a6v5WKywQmmGLZuyS"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = (response.data)
        
    });
})
// dynamically create a div(s) for the gifs to go.
// append user searches to the dom where the buttons are.  
// create click function to change the state of the gifs, still and animate. 