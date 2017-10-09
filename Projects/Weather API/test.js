var lat,lon;
var link = "http://api.openweathermap.org/data/2.5/weather?";

$(document).ready(function(){
	console.log("Here");
	// Function to retrieve the users geolocation
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position) {
			
			lat = "lat="+38.5816//position.coords.latitude;
			lon = "lon="+(-121.4944)//position.coords.longitude;
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
    		temp = ((temp * (9/5)) + 32).toFixed(2);

    		
    		$('#temperature').text(temp);
    		$('.unit').text("F");
		}
	});

	// Code for the celsius button
	$('#celsius').click(function(){
		if(!$("#celsius").hasClass("active")){
			$('#celsius').toggleClass('active'); // Activate
			$('#farenheight').toggleClass('active'); // Deactivate

			var temp = $(".temperature").text();
    		temp = ((temp-32) * (5/9)).toFixed(2);
    		
    		$('#temperature').text(temp);
    		$('.unit').text("C");

		}
	});
});

// Function to convert from Unix UTC time to local time
function convertTimestamp(timestamp){
	var d = new Date(timestamp * 1000), 
		hh = d.getHours(),
		min = ('0' + d.getMinutes()).slice(-2); // Adding the leading Zero for times like 7:05 AM
		return hh + ':' + min;
}

function setBackgroundImage(current_weather){
	console.log(current_weather);
	var weather_picture = {
		Clouds: "https://images.unsplash.com/photo-1430950716796-677ecbc99485?dpr=1&auto=compress,format&fit=crop&w=1000&h=&q=80&cs=tinysrgb&crop=",
		Rain: "https://images.unsplash.com/photo-1501762371526-e848481e125b?dpr=1&auto=compress,format&fit=crop&w=1000&h=&q=80&cs=tinysrgb&crop=",
		Clear: "https://images.unsplash.com/photo-1494187570835-b188e7f0f26e?dpr=1&auto=compress,format&fit=crop&w=1000&h=&q=80&cs=tinysrgb&crop="
	};
	
	$('body').css('background-image', 'url(' + weather_picture[current_weather] + ')');
}

function getWeather(lat, lon){
	var api = "&APPID=d996fdb71bbcf67056842061b524b44f";
	var url = link + lat +"&"+ lon + api;// Building the url for the weather API using the users longitude and latitude
	$.getJSON(url, function(weather_data){
		console.log(JSON.stringify(weather_data));


		//  Extracting the location
		var location = weather_data.name +" "+ weather_data.sys.country;
		$('#location').text(location);

		// Building the URL to get the icon
		var icon_url = "https://openweathermap.org/img/w/" +weather_data.weather[0].icon+".png";
		$('#w-icon').attr('src', icon_url).width(70);

		// Extracting the temperature
		var temperature = (weather_data.main.temp - 273.15).toFixed(2);
		$('#temperature').text(temperature);

		// Extracting the weather
		var weather = weather_data.weather[0].main;
		$('#weather').text(weather);

		// DO NOT LEAVE THIS HERE!!!
		setBackgroundImage(weather);

		// Extracting the wind
		$('#wind').text(weather_data.wind.speed);

		// Extracting the wind
		$('#sunrise').text(convertTimestamp(weather_data.sys.sunrise));

		// Extracting the wind
		$('#sunset').text(convertTimestamp(weather_data.sys.sunset));

		// Extracting the Humidity
		$('#humidity').text(weather_data.main.humidity + "%");

		// Extracting the Air Pressure
		$('#pressure').text(weather_data.main.pressure);

	});
}
