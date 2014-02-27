$(document).ready(function(){

  var $cardOne;
  var $cardTwo;

  $("div.card").on("click", function(event){

    event.stopPropagation();
    event.preventDefault();

    function select($card){
      $card.addClass("chosen");
      flip($card);

    };

    function flip($card){
      $card.find(".back").toggle();
      $card.find(".front").toggle(); 
    }

    if(!$cardOne){
      $cardOne = $(this);
      select($cardOne);
    }else{
      if(!$cardTwo){
        $cardTwo = $(this);
        select($cardTwo);
        if ($cardOne.find(".info").text() === $cardTwo.find(".info").text()){
          $cardOne.removeClass("chosen").addClass("matched");
          $cardTwo.removeClass("chosen").addClass("matched");
          $cardOne = undefined;
          $cardTwo = undefined;
        }else{
          $cardOne.removeClass("chosen");
          flip($cardOne);
          $cardTwo.removeClass("chosen");
          flip($cardTwo);
          $cardOne = undefined;
          $cardTwo = undefined;
        }
      }
    }


  });

});