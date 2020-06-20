//js for webpage interactions
 
 function checkCredentials(){
	var savedUsernames = ["Ellin", "Aoife"];
	var savedPasswords = ["Password1", "Password2"];
	var currentUsername = document.getElementById("usernameInput").value;
	var currentPassword = document.getElementById("passwordInput").value;
		 
	 //iterate through stored usernames
	 for (i = 0; i < savedUsernames.length; i++) {
		
		// check if username matches array content: if true, check password. If false, display error message.
			if (currentUsername == savedUsernames[i]){
				 
				 //check if password in same index matches. If true, proceed login. If false, display error message.
				 if (currentPassword == savedPasswords[i]){
					
					//set i to array length to stop for loop
					i = savedUsernames.length;
					
					//redirect to homepage
					window.location.replace("../homepage.html");
					
				 }
				 else{
					 document.getElementById("loginMessage").innerHTML = "Password is incorrect";
					 
					 //set i to array length to stop for loop
					i = savedUsernames.length;
				 }
			}
			else{
				
				document.getElementById("loginMessage").innerHTML = "Username " + currentUsername " is incorrect";
			}

	}
 }
 
 function signUp(){
	 document.getElementById("loginMessage").innerHTML = "Signing up is not a feature yet.";
 }
 