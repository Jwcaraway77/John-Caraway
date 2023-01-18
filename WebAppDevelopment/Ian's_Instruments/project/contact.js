"use strict"

//functionality from form_validation_demo
//wait for the document to load
$(document).ready(function() {
	//regular expression for email id
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		
	// move the focus to the first text box
	$("#name").focus();
	
	// the handler for the submit event of the form
	// executed when the submit button is clicked
	$("#contactForm").submit(
		function(event) {
			var isValid = true;

			// validate the name entry
			var name = $("#name").val().trim();
			if (name == "") {
				$("#name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#name").val(name);
				$("#name").next().text("");
			}
			$("#name").val(name);
						
			// validate the email entry with a regular expression
			var email = $("#email").val().trim();
			if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			}
			$("#email").val(email); 
			
			// validate the message textarea
			var message = $("#message").val().trim();
			if (message == "") { 
				$("#message").next().text("Please enter your message.");
				isValid = false; 
			} else {
				$("#message").next().text("");
			}
			$("#message").val(message);
			
			// prevent the submission of the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault();				
			}
		} // end function
	);	// end submit
}); // end ready