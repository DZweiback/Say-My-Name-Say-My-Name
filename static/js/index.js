/*
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
*/

submit_button = d3.select("#submit_button");
submit_button.on("click", function() {
    d3.event.preventDefault();
    
    var yearinputElement = d3.select("#inputYear");
    var year = yearinputElement.property("value");

    var endpoint = "/api/movie_year?movie_year=" + year;

    d3.json(endpoint, {mode: 'no-cors'}).then(function(data){

      var table = d3.select("#table_body");
      
      table.html("");
      
      data.forEach(entry => {
        row = table.append("tr");
        row.append("td").text(entry.movie_title);
        row.append("td").text(entry.character_name);
        row.append("td").text(entry.actor_name);

      });

    });
    
  });


  lineviz = document.getElementById('lineviz');
  barviz = document.getElementById('barviz');
  mapviz = document.getElementById('mapviz');
    
  lineviz.style = "display:none";
  barviz.style = "display:none";
  mapviz.style = "display:none";
  
  function updateViz(viz)
  {
    dataviz = document.getElementById('dataviz')
  
    switch(viz){
      case('top_10_child_names'):
      barviz.style = "display:none";
      mapviz.style = "display:none";
      lineviz.style = "display:inline";
      break;
      case('top_10_films'):
      mapviz.style = "display:none";
      lineviz.style = "display:none";
      barviz.style = "display:inline";
      break;
      case('by_year'):
      barviz.style = "display:none";
      lineviz.style = "display:none";
      mapviz.style = "display:inline";
      break;
    }
  }