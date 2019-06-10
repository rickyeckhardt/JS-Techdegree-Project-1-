/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
Author: Ricky Eckhardt
email: ricky.eckhardt@gmail.com
******************************************/

quotes = [
  {
    quote: "Every artist was first an amateur." ,
    source: "Ralph Waldo Emerson",
    citation: "" ,
    year: "2001" ,
  },
  {
    quote: "Creativity takes courage." ,
    source: "Henri Matisse",
    citation: "" ,
    year: "" ,
  },
  {
    quote: "Every child is an artist. The problem is how to remain an artist once we grow up." ,
    source: "Pable Picasso",
    citation: "" ,
    year: "1984" ,
  },
  {
    quote: "You don't take a photograph, you make it." ,
    source: "Ansel Adams",
    citation: "" ,
    year: "" ,
  },
  {
    quote: "Painting is easy when you don't know how, but very difficult when you do." ,
    source: "Edgar Degas",
    citation: "Rainbow" ,
    year: "" ,
  }
];

console.log(quotes);

function getRandomQuote() {
    var randnum = Math.floor(Math.random() * Math.floor(quotes.length));
    return quotes[randnum];
}

/***
  Pick a random background color to use each time a new quote is loaded.
  flat UI colors are used.
***/

function pickFlatColor() {
  
  //An array of flat UI colors to choose from
  //Color palette from https://flatui.com/flat-ui-color-palette/
  var flatcolors = [
    "1ABC9C", //Turquoise
    "3498DB", //Peter River
    "9B59B6", //Amethyst
    "34495E", //Wet Asphalt
    "E67E22", //Carrot
    "E74C3C"  //Alizarin
  ];
  
  var randnum = Math.floor(Math.random() * Math.floor(flatcolors.length));
  
  return flatcolors[randnum];
}

function printQuote() {
  var randquote = getRandomQuote();
  var thequote =  '<p class="quote">' + randquote.quote + '</p>' +
                  '<p class="source">' + randquote.source;
  
  if (randquote.citation === undefined || randquote.citation === null || randquote.citation.length <= 0) {
    //Do nothing
  } else {
    thequote += '<span class="citation">' + randquote.citation + '</span>';
  }
  
  if (randquote.year === undefined || randquote.year === null || randquote.year.length <= 0) {
    //Do nothing
  } else {
    thequote += '<span class="year">' + randquote.year + '</span>';
  }
  
  // Picks a random quote to display on the page. 
  document.getElementById("quote-box").innerHTML = thequote; 
  
  // Changes the page background to a random flat color
  document.body.style.backgroundColor = "#" + pickFlatColor();
}


  document.getElementById('loadQuote').addEventListener("click", printQuote, false);















