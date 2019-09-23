// global Var's here. 


var gifDiv = $('<div id="gifs">');

// array full of the pre-made buttons 
var topics = ["planets", "moon", "astronauts", "Sun", "Earth", "Space Station", "galaxy", "Nebula", "Space Ship", "Black Hole"]
// dynamically create a div(s) for the gifs & buttons to go.
function makeBtns() {
    $('.buttons').empty();
    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        // var that holds buttons
        var catBtn = $('<button>')
        // add class, attribute, and text to buttons
        catBtn.addClass('topic');
        catBtn.text(topics[i]);
        catBtn.attr('data-name', topics[i]);
        // append to div
        $('.buttons').append(catBtn);
    }
};
makeBtns();


// function to display the gifs
function displayGifs() {

    var topicID = $('.topic').click(function () {
        var item = $(this).attr('data-name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + item + "&limit=8&rating=g&api_key=zeDT6SboXDp0gp0a6v5WKywQmmGLZuyS"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var results = (response.data)
            for (i = 0; i < results.length; i++) {
                var gifDiv = $('<div>');
                var rating = results[i].rating;
                var p = $('<p>').text("Rating: " + rating);
                var image = $('<img>');
                image.attr('src', results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(image);
                $('gifArea').prepend(gifDiv);
            }
        })
    });
};
displayGifs();


// make Search bar input make a new button
$('.searchbtn').on("click", function () {
    event.preventDefault();
    // create Var to hold search term 
    var search = $('#searchBar').val().trim();
    console.log(search);
    topics.push(search);
    console.log(topics);
    makeBtns();
    $('#searchBar').val("");
});

// TO DO: 
// ========================================================================================================
// create click event to register our search box to search variable, push new button up to topic array and rerun make button function