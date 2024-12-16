"use strict";

//Preload images on page load
//Runs for each image in the unordered list
$(document).ready(function() {
    $("#image_list a").each(function() {
        var img = new Image();
        img.src = $(this).attr("href");
    });
});

//Event when image is clicked
//Will prevent default action when link is clicked
//Instead replaces currently displayed image with clicked image
$("#image_list a").click(function(evt) {
    evt.preventDefault();
    var imgSrc = $(this).attr("href");
    var caption = $(this).attr("title");

    $("#gallery img").attr("src", imgSrc);
    $("#caption").text(caption);
});

//Moves focus to the first link on page load
$("#image_list a:first").focus();