$(document).ready(function(){
  var $card = $("div.card");

  $card.on("click", function(){
    $(this).addClass("chosen");
    $(this).find("img.front").fadeIn();
    $(this).find(".info").fadeIn();
  })






})