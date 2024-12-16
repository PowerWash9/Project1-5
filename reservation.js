"use strict";

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const phonePattern = /\b[0-9]+\-[0-9]+\-[0-9]{4}\b/;

	//Obtain all span elements on page load
	const spans = document.getElementsByTagName("span");
	
	//Set the focus to arrival date
	document.getElementById("free_date").focus();

	//Validate the form
	document.getElementById("reservation_form").addEventListener("submit", evt => {
		let d = document.getElementById("free_date").value;
		let h = document.getElementById("hours").value;
		let n = document.getElementById("name").value;
		let e = document.getElementById("email").value;
		let p = document.getElementById("phone").value;

		//Check if date is entered
		if (d == "") {
			evt.preventDefault();
			spans[0].textContent = "This field is required";
			spans[0].style.display = "inline-block";
		} else {
			spans[0].style.display = "none";
		}

		//Check nights' numerical value
		if (h == "" || isNaN($.trim(h) * 1)) {
			evt.preventDefault();
			spans[1].textContent  = "Must be a valid numerical value";
			spans[1].style.display = "inline-block";
		} else {
			spans[1].style.display = "none";
		}

		//Check name
		if (n == "") {
			evt.preventDefault();
			spans[2].textContent  = "This field is required";
			spans[2].style.display = "inline-block";
		} else {
			spans[2].style.display = "none";
		}

		//Check email address
		if (emailPattern.test($.trim(e)) == false) {
			evt.preventDefault();
			spans[3].textContent  = "Must be a valid email address";
			spans[3].style.display = "inline-block";
		} else {
			spans[3].style.display = "none";
		}

		//Check phone number
		if (phonePattern.test($.trim(p)) == false) {
			evt.preventDefault();
			spans[4].textContent  = "This field is required";
			spans[4].style.display = "inline-block";
		} else {
			spans[4].style.display = "none";
		}
	});
}); // end ready