//THIS IS OUR JAVASCRIPT

//cards should be clickable but catagories should not be

$(".value").on("click", function (){
  $(this).parent().siblings().removeClass("chosen");
  $(this).parent().addClass("chosen");
  $(".value").not(this).parent().siblings().removeClass("disabled");
  $(".value").not(this).parent().addClass("disabled");
});
$(".chosen").on("click", function(){
  
});

$(".chosen").on("click", function (){
  var $this = $(this);
  $this.removeClass(".chosen");
  $this.addClass(".played");
});
