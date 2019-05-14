$(document).ready(function() {
    $(window).scroll(function(e) {
        var s = $(window).scrollTop(),
            opacityVal = (s / 200);

        $('.blurred-image').css('opacity', opacityVal);
    });
});


$(function() {
    $("#bt").click(function() {
      $(".layout_foreground").toggleClass("next-page");
    });
  });

  function myFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

  $("#first-choice").change(function(){
    var $dropdown = $(this);
    $.getJSON("../html.json", function(data){
      var key = $dropdown.val();
      var vals = [];
      switch(key){
        case 'Top_Boy_Names':
          vals = data.Top_Boy_Names.split(",");
          break;
          case 'Top_Girl_Names':
            vals = data.Top_Girl_Names.split(",");
            break;
            case 'base':
            vals = ['Please choose from above'];
      } 

      var $secondChoice = $("#second-choice");
      $secondChoice.empty();
      $.each(vals, function(index, value){
        $secondChoice.append("<option>" + value + "</option>");
      });
    });
   
  });
