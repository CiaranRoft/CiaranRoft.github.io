$(document).ready(function(){
 
  $("#get-quote").click(function(){
    fetchQuote();    
  }); 

  function fetchQuote(){
    $.getJSON("https://got-quotes.herokuapp.com/quotes/", function(data){
      var quote = data.quote;
      var author = data.character;
      writeQuote(quote, author);
    });
  }

  function writeQuote(quote, author){
    $('.quote').text("\"" + quote + "\"");
    $('.author').text('~ ' + author);
  }

  $('#tweet-quote').click(function(){
    window.open("https://twitter.com/home/?status=" + $('.quote').text() + "  " + $('.author').text())
  });

});

