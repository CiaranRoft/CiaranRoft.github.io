
$(document).ready(function(){
	// First Check (Handles color of the nav-bar if the page is reloaded half way down the page)
 	if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
      	$(".navbar").css("background-color", "#D4CAD5"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
 	} else {
      	$(".navbar").css("background-color", "transparent"); // if not, change it back to transparent
    }

  	$(window).scroll(function() { // check if scroll event happened
    	if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
      		$(".navbar").css("background-color", "#D4CAD5"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    	} else {
      	$(".navbar").css("background-color", "transparent"); // if not, change it back to transparent
    	}
  	});
});