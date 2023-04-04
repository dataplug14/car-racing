
    $(document).keydown(function(e){
      if (e.which == 37) {
        /** left arrow click (left keboard button) **/
        $(".carWrapper").addClass("left_pressed");
        $(".carWrapper").removeClass("right_pressed");
      }else if (e.which == 38) {
        $(".roadWrapper").removeClass("low-speed");
        $(".roadWrapper").addClass("high-speed");
        $(".relow").append('<audio autoplay> <source src="car-sound.mp3" type="audio/mpeg" >Your browser does not support the audio element.</audio>');
        $(".carWrapper > img").attr("src", "animated-car.gif");
      return false;

      }else if (e.which == 39) {
        $(".carWrapper").removeClass("left_pressed");
        $(".carWrapper").addClass("right_pressed");        
      }else if (e.which == 40) {
        $("audio").remove();
        $(".roadWrapper").removeClass("high-speed");
        $(".roadWrapper").addClass("low-speed");
      }
    });