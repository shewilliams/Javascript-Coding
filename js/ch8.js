//to hide paragraphs
$(document).ready(function(){
    $("button").click(function(){
      $("p:last").addClass("lead");
    });
  });

$("#response").html("some string.");
