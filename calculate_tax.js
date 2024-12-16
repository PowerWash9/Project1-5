"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);
});

//Called when "Calculate" button is clicked
//Gets value from user input, checked to see if it's valid
function processEntry() {
	var income = document.getElementById("income").value
	if (income <= 0 || isNaN(income * 1)) {
		document.getElementById("message").style.display = "block";
	} else {
		document.getElementById("message").style.display = "none";
		calculateTax(income);
	} 
}

//Called once input is validated
//Determines the income tax based on user input
/*
	Tax example, if income is 57,650:
	Value is not greater than 85,525, but 40,125
	tax = 4,617.50 + ([57,650 - 40,125] * 0.22)
	tax = 4,617.50 + (17,525 * 0.22)
	tax = 4,617.50 + 3,855.50
	tax = 8,473.00
*/
function calculateTax(income) {
	var tax = 0;
	if (income > 518400) {
		tax = 156235 + ((income - 518400) * 0.37);
	} else if (income > 207350) {
		tax = 47367.50 ((income - 207350) * 0.35);
	} else if (income > 163300) {
		tax = 33271.50 + ((income - 163300) * 0.32);
	} else if (income > 85525) {
		tax = 14605.50 + ((income - 85525) * 0.24);
	} else if (income > 40125) {
		tax = 4617.50 + ((income - 40125) * 0.22);
	} else if (income > 9875) {
		tax = 987.50 + ((income - 9875) * 0.12);
	} else if (income > 0) {
		tax = (income * 0.1);
	}

	//Fix the answer to two decimal places 
	//Display results in second box
	tax = tax.toFixed(2);
	document.getElementById("tax").value = tax;
}