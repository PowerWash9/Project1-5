//Code for individual buttons

//button 1
$(document).ready(function(){
    $("#b1").click(function(){
        $("#h1").toggle();
        $("#b1").text($("#b1").text() == "Show more" ? "Show less": "Show more");
    });
  });

//button 2
$(document).ready(function(){
    $("#b2").click(function(){
        $("#h2").toggle();
        $("#b2").text($("#b2").text() == "Show more" ? "Show less": "Show more");
    });
});

//button 3
$(document).ready(function(){
    $("#b3").click(function(){
        $("#h3").toggle();
        $("#b3").text($("#b3").text() == "Show more" ? "Show less": "Show more");
    });
});

//button 4
$(document).ready(function(){
    $("#b4").click(function(){
        $("#h4").toggle();
        $("#b4").text($("#b4").text() == "Show more" ? "Show less": "Show more");
    });
});