"use strict";

$(document).ready( () => {
	//Preload images
	$("#image_list a").each( (index, element) => {
		const swappedImage = new Image();
		swappedImage.src = $(element).attr("href");
	});
	
	//Set up event handlers for links    
	$("#image_list a").click( evt => {
		//Assign element that triggered event to link
		const link = evt.currentTarget;
		
		const imageURL = $(link).attr("href");
		
		const caption = $(link).attr("title");

		//Cancel the default action of the link
	    evt.preventDefault();

		//Fade Out the old image, fade in the clicked image
		$("#image, #caption").fadeOut(1000, function() {
			//Update displayed image and caption
			$("#image").attr("src", imageURL);
			$("#caption").text(caption);

			//Fade in to the new image and caption
			$("#image, #caption").fadeIn(1000);
		})

	}); //End click
	
	//Move focus to first thumbnail
	$("li:first-child a").focus();
}); //End ready