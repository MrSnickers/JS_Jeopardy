$(document).ready(function(){

  var $cardOne;
  var $cardTwo;

  $("div.card").on("click", function(event){

    event.stopPropagation();

    function resetCards(){
      $cardOne = undefined;
      $cardTwo = undefined;
    }

    function select($card){
      $card.addClass("chosen");
      flip($card);
    }

    function flip($card){
      $card.find(".back").toggle();
      $card.find(".front").toggle(); 
    }

    function slowFlip($card){
      setTimeout(function () {
        $card.find(".back").toggle();
        $card.find(".front").toggle();
      }, 600);
    }

    if($(this).not(".matched") && $(this) != $cardOne){
      if(!$cardOne){
        $cardOne = $(this);
        select($cardOne);
      }else{
        $cardTwo = $(this);
        select($cardTwo);

        if ($cardOne.find(".info").text() === $cardTwo.find(".info").text()){
          setTimeout(function(){
            $cardOne.removeClass("chosen").addClass("matched").find(".info").toggle();
            $cardTwo.removeClass("chosen").addClass("matched").find(".info").toggle();
            resetCards();
            if ($(".card").not(".matched").length == 0){
              $(".winner").removeClass("hidden");
            }
          }, 400);
          
        }else{
          $cardOne.removeClass("chosen");
          slowFlip($cardOne);
          $cardTwo.removeClass("chosen");
          slowFlip($cardTwo);
          resetCards();
        }
      }
    }
  });

});