$(document).ready(function(){
    // Code to make the hamburger retract after option is selected
    $('.nav a').on('click', function(){ 
      console.log("Link clciked!!");
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});
