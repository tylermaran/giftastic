



// Populate function adds a new button for each search term
function populate() {
	// add buttons for each animal chosen
	var searchTerm = $("#searchTerm").val().trim();
  	// console.log("WORKING");
  	console.log(searchTerm);
  	// Create a variable named "letterBtn" equal to $("<button>");
	var searchBtn = $("<button>");
	// Give each button the following class
	searchBtn.addClass("gifButton gifclick");
	// Then give each button a data-attribute 
	searchBtn.attr("gifData", searchTerm);
	searchBtn.attr("id", "gifId");
	// Then give each button a text equal to searchTerm
	searchBtn.text(searchTerm);
	// Appends each button to the searchList div
	$("#searchList").append(searchBtn);  	
	// Clears out the search box
	$("#searchTerm").val("");
	$("#gifColumn").empty();
	addgifs(searchTerm);

}
// ********** End of populate function ***************************

console.log("it gets to here");

function addgifs(term){
	
	for (var i = 0; i < 10; i++) {
		
		console.log(term);
		var newterm = term;
		var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + newterm;

		$.ajax({
			url: queryURL,
	    	method: "GET"
	    })

		.done(function(response) {
    	    console.log(response);
			var imageUrl = response.data.image_original_url;

        	//creating and storing an image tag
        	var addgif = $("<img>");

        	//setting the catimage src attribute to imageUrl
       		addgif.attr("src", imageUrl);
        	addgif.attr("alt", newterm);
        	addgif.attr("id", "gifimage");

        	//prepends the catImage to div:images
       		$("#gifColumn").append(addgif);
    	});
    }
};




// ********** Searches for whatever button was clicked ***********

$(".gifButton").on("click", function(){
	console.log("Button clicked");
	// create a new variable to hold the div
	var newGif = $("<div>");
	// 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
	newGif.addClass("gif");
	// uses the data added to the search button to add text value to the gif div
	newGif.text($(this).attr("gifData"));
	// adds the newgif to the gifColumn
	$("#gifColumn").append(newGif);
});
// ********** End of button handler *****************************



// On Click for Search - calls the populate function
$("#search").on("click", function(){
	populate();
});

// On Click for Clear - clears the searchList and gifColumn divs
$("#clear").on("click", function(){
	$("#searchList").empty();
	$("#gifColumn").empty();
});




