//THIS IS OUR JAVASCRIPT

//cards should be clickable but catagories should not be

$(".value").on("click", function (){
  $(this).parent().addClass("chosen");
  $(".value").not(this).parent().toggleClass("disabled");
  $(this).parent().addClass("question");
});


$(".chosen").on("click", function (){
  var $this = $(this);
  $this.removeClass(".chosen");
  $this.addClass(".played");
});
