$(document).ready(function(){

  
    var quotes= [{
      quote: "I don't trust Godly men.",
      author: "Petyr Baelish"
    }, {
      quote: "So Instead, we should settle our differences and live in harmony for the rest of our days?",
      author: "Cersei Lannister"
    }, {
      quote: "I believe that's the nicest thing you ever told to me",
      author: "Arya Stark"
    }, {
      quote: "I was never going to be as good a lady as you. So I had to be something else. I never could have survived what you survived",
      author: "Arya Stark"
    }, {
      quote: "He's never been a bastard. He's the heir to the Iron Throne",
      author: "Brandon Stark"
    }, {
      quote: "Robert's Rebellion was built on a lie. Rhaegar didn't kidnap my aunt or rape her. He loved her. And she loved him",
      author: "Brandon Stark"
    }, {
      quote: "I can see things that happened in the past. I can see things happening now all over the world.",
      author: "Brandon Stark"
    }, {
      quote: "I pledged to ride north. I intend to honor that pledge",
      author: "Jaime Lannister"
    }, {
      quote: "You grew up with actors, You learned their craft and you learnt it well. But I grew up with soldiers. I learned how to die a long time ago",
      author: "Ned Stark"
    }, {
      quote: "The man who passes the sentence should swing the sword",
      author: "Ned Stark"
    }, {
      quote: "If the day ever comes when that boy would rather wield a sword than forge one, you send him to me",
      author: "Ned Stark"
    }, {
      quote: "They were born on the wrong side of the wall, that doesn't make them monsters",
      author: "Jon Snow"
    }, {
      quote: "My watch is ended",
      author: "Jon Snow"
    }, {
      quote: "If I don't watch over you, Father's ghost will come back and murder me",
      author: "Jon Snow"
    }, {
      quote: "I did what I thought was right. And I got murdered for it. And now I'm back. Why?",
      author: "Jon Snow"
    }, {
      quote: "Leave one wolf alive, and the sheep are never safe",
      author: "Arya Stark"
    }, {
      quote: "A girl is Arya Stark of Winterfell and I'm going home",
      author: "Arya Stark"
    }, {
      quote: "Joffrey, Cersei, Walder Frey, Meryn Trant, Tywin Lannister, The Red Woman, Beric Dondarrion, Thoros of Myr, Ilyn Payne, The Mountain, The hound",
      author: "Arya Stark"
    }, {
      quote: "A girl has no name",
      author: "Arya Stark"
    }, {
      quote: "You finally show me something I care about and then you drag me away",
      author: "Brandon Stark"
    }, {
      quote: "I drink and I know things ",
      author: "Tyrion Lannister"
    }, {
      quote: "Watching your vicious bastard die gave me more relief than 1000 lying whores",
      author: "Tyrion Lannister"
    }, {
      quote: "If you're going to be a cripple, it's better to be a rich cripple",
      author: "Tyrion Lannister"
    }, {
      quote: "Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.",
      author: "Tyrion Lannister"
    }, {
      quote: "I'm not Ned Stark, I understand the way this game is played",
      author: "Tyrion Lannister"
    }, {
      quote: "He was no Dragon. Fire cannot kill a Dragon",
      author: "Daenerys Targaryen"
    }, {
      quote: "I am a Khaleesi of the Dothraki. I am the wife of the great Khal and I carry his son inside me.",
      author: "Daenerys Targaryen"
    }, {
      quote: "I'm not going to stop the wheel. I'm going to break the wheel",
      author: "Daenerys Targaryen"
    }, {
      quote: "They can live in my new world or they can die in their old one",
      author: "Daenerys Targaryen"
    }, {
      quote: "Men want only one thing from pretty girl",
      author: "Shae"
    }, {
      quote: "I will kill that man. I don't care how many arrows they feather me with, how many spears they run through me",
      author: "Theon Greyjoy"
    }, {
      quote: "A Targaryen alone in the world is a terrible thing.",
      author: "Aemon Targaryen"
    }, {
      quote: "If we beheaded every ranger who lay with a girl, the Wall would be manned by headless men.",
      author: "Aemon Targaryen"
    }, {
      quote: "Khal Drogo is marching the wrong way with my army.",
      author: "Viserys Targaryen"
    }, {
      quote: "Cersei understands the consequences of her absence and she is absent anyway, which means she does not intend to suffer those consequences",
      author: "Margaery Tyrell"
    }, {
      quote: "You helped me win the Iron Throne, now help me keep the damn thing. We were meant to rule together.",
      author: "Robert Baratheon"
    }, {
      quote: "I never loved my brothers. A sad thing for a man to admit, but it's true. You were the brother I chose",
      author: "Robert Baratheon"
    }, {
      quote: "I brought shame to my house, I broke my father's heart.",
      author: "Jorah Mormont"
    }, {
      quote: "The Dothraki have never crossed the narrow sea. They fear any water their horses can't drink.",
      author: "Jorah Mormont"
    }, {
      quote: "They're dragons Khaleesi, they can never be tamed.",
      author: "Jorah Mormont"
    }, {
      quote: "I love you. I'll always love you.",
      author: "Jorah Mormont"
    }, {
      quote: "I did what I did for the good of the realm.",
      author: "Lord Varys"
    }, {
      quote: "Littlefinger is one of the most dangerous men in Westeros.",
      author: "Lord Varys"
    }, {
      quote: "The birds sing in the west, the birds sing in the east, if one knows how to listen",
      author: "Lord Varys"
    }, {
      quote: "For the night is dark and full of terrors.",
      author: "Melisandre"
    }, {
      quote: "I read it in a book.",
      author: "Samwell Tarly"
    }, {
      quote: "I've been worrying about Jon for years. He always comes back.",
      author: "Samwell Tarly"
    }, {
      quote: "If someone follows me without an invitation, I'm the last person they ever follow",
      author: "Bronn"
    }, {
      quote: "There's no cure for being a cunt!",
      author: "Bronn"
    }, {
      quote: "Give me ten good men and some climbing spikes, I'll impregnate the bitch.",
      author: "Bronn"
    }, {
      quote: "I'm proud to be your squire.",
      author: "Podrick Payne"
    }, {
      quote: "I fear I never again see Missandei from the Island of Naath.",
      author: "Grey Worm"
    }, {
      quote: "I don't make peace with the queen's enemies. I kill the queen's enemies.",
      author: "Grey Worm"
    }, {
      quote: "Hodor, Hodor.",
      author: "Hodor"
    }, {
      quote: "A girl stole from the Many-Faced God. Now a debt is owed",
      author: "Jaqen H'ghar"
    }];
  
  $("#get-quote").click(function(){
    fetchQuote();    
  }); 

  function fetchQuote(){
    var randomQuote = Math.floor(Math.random() * (quotes.length-1) );
    console.log(randomQuote);
    var quote = quotes[randomQuote].quote;
    var author = quotes[randomQuote].author;

    writeQuote(quote, author);
  }

  function writeQuote(quote, author){
    $('.quote').text("\"" + quote + "\"");
    $('.author').text('~ ' + author);
  }

  $('#tweet-quote').click(function(){
    window.open("https://twitter.com/home/?status=" + $('.quote').text() + "  " + $('.author').text())
  })
});

