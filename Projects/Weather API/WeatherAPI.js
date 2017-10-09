var lat,lon;
var link = "https://fcc-weather-api.glitch.me/api/current?";

$(document).ready(function(){
	// Function to retrieve the users geolocation
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position) {
			lat = "lat="+position.coords.latitude;
			lon = "lon="+position.coords.longitude;
    		getWeather(lat, lon);
 
    	});
    } else{
    	console.log("Geolocation not supported by Browser")
    } 
    
    // Code for the Farenheight button
    $('#farenheight').click(function(){
    	if(!$("#farenheight").hasClass("active")){
			$('#celsius').toggleClass('active'); // Deactivate
			$('#farenheight').toggleClass('active'); // Activate

			// Changing from Celsius to Fareheight
			var temp = $(".temperature").text();
    		temp = ((temp * (9/5)) + 32).toFixed(1);

    		
    		$('#temperature').text(temp);
    		$('.temp-unit').text("F");
		}
	});

	// Code for the celsius button
	$('#celsius').click(function(){
		if(!$("#celsius").hasClass("active")){
			$('#celsius').toggleClass('active'); // Activate
			$('#farenheight').toggleClass('active'); // Deactivate

			var temp = $(".temperature").text();
    		temp = ((temp-32) * (5/9)).toFixed(1);
    		
    		$('#temperature').text(temp);
    		$('.temp-unit').text("C");

		}
	});
});

function getWeather(lat, lon){
	var url = link + lat + "&" + lon // Building the url for the weather API using the users longitude and latitude
	$.getJSON(url, function(weather_data){
		console.log(weather_data);

		// Gathering all of the nessesary information
      	var loc = weather_data.name +" "+ weather_data.sys.country;
      	var temp = weather_data.main.temp
      	var w_description = titleCaseReg(weather_data.weather[0].description)
      	var weather = weather_data.weather[0].main +" - "+ w_description;
      	var wind = weather_data.wind.speed;

      	var direction = getCardinal(weather_data.wind.deg);


    	$('#location').text(loc);
    	$('#temperature').text(temp);
    	$('#weather').text(weather);
    	$('#wind').text(wind);
	});
}

// Function to calculate the cardinal direction of the wind
function getCardinal(degree){
	if(degree > 0 && degree < 359){
		if(degree < 45 ){
			console.log("N");
		}
		else if(degree < 90 ){
			console.log("NE");
		}
		else if(degree < 135 ){
			console.log("E");
		}
		else if(degree < 180 ){
			console.log("S");
		}
		else if(degree < 225 ){
			console.log("SW");
		}
		else if(degree < 270 ){
			console.log("W");
		}
		else{
			console.log("NW");
		}
	}else
		console.log("Direction not between 0 - 360")
}

// Function to Title Case the description of weather.
function titleCaseReg(str){
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

