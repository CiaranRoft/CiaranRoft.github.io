$(document).ready(function(){
	
	$("#wiki_input").keypress(function(event){
    	// Only fires when the Enter button is pressed
    	if(event.which === 13){
    		var input = ($("#wiki_input").val());
    		$("#wiki_results").html(""); // Cleaning the display
    		// In the case of nothing bveing entered into the text box
    		if(input.length !== 0){
	    		var url = buildAPI(input); // building the API key
	    		requestData(url); // Fetching the data
	    		$("#wiki_input").val(""); // Clearing the input
    		}else{
    			renderError(); // Incase of an error 
    		}
    	}
    });    
});

function buildAPI(input){
	var api_string = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" 
					+ input + "&limit=10&format=json&callback=?";

	return api_string;
}

function requestData(url){
	$.getJSON(url, function(data){
    	
    	if(data[1].length < 4)
    		renderError();

		for (var i = 0; i < data[1].length; i++) {
			var articleTitle = data[1][i];
			var articleDesc = data[2][i];
			var articleLink = data[3][i];
			//  Any descriptions that are too long are shortened
			if(articleDesc.length > 250){
				articleDesc = articleDesc.substring(0, 230) + "....";
			}
			var result = articleTitle + "\n" + articleDesc + "\n" + articleLink;
			renderHTML(articleTitle, articleDesc, articleLink);
		}
		addStyle();
    }); 
}

function renderHTML(title, description, link){
	var html = "<a href='" + link +"' id='link'>" +
				"<h2>"+title+"</h2>"+
				"<p>"+description+"</p></a>";
	
	$("#wiki_results").append(html);
}

function addStyle(){
	$("h2").addClass("heading");// Styling the heading
	$("p").addClass("description"); // Styling the heading
}

function renderError(){
	console.log("Error!!!");

	var icon = ""; // Error icon
	var html = "<div class = 'error'>No empty strings or Gibberish allowed!</div>"
	$("#wiki_results").append(html);
}

