$(document).ready(function(){

// console.log('hello world')

// $("h1").css({
//   "color": "red",
//   "font-size": 20
// });
//
// var width =
// $("h1").css("width");
// console.log(width);
//
// $("h1.banana").html("<a href=''>BANANA</a>");
// $(".pineapple").text ("I LOVE PINEAPPLES");

$("body").append("<h1 class='bandname'><h1>");
$("body").append("<h1 class='tourname'><h1>");
$("body").append("<h1 class='location'><h1>");
$("body").append("<h1 class='date'><h1>");
$("body").append("<h1 class='doortime'><h1>");
$("body").append("<h1 class='ticketlink'><h1>");
$("body").append("<h1 class='backgroundimage'><h1>");
//other classes
var info = function(){
  var bandname = prompt("What's the name of the band?");
  var tourname = prompt("What's the tour name?");
  var location = prompt("What's the venue?");
  var date = prompt("What is the date?");
  var doortime = prompt("What time do doors open?");
  var ticketlink = prompt("What's the link to purchase tickets?");
  var backgroundimage = prompt("What's the URL for the background image?");
  // other prompts
  $('h1.bandname').text(bandname);
  $('h1.tourname').text(tourname);
  $('h1.location').text(location);
  $('h1.date').text(date);
  $('h1.doortime').text('DOORS OPEN AT ' + doortime);
  $('h1.ticketlink').text('TICKETS AT ' + ticketlink);
  $('h1.backgroundimage').text(backgroundimage)
  $("button").remove();
}

$(".button").click(function(){info()
});


// for image genertator //
// $('body').append('"<img src=' + myImageURL + '/>"')
//
// $('img').attr("src", photo);
});
