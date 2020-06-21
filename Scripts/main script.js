//js for webpage interactions


document.getElementById("loginButton").addEventListener("click", checkCredentials);
document.getElementById("signupButton").addEventListener("click", signUp);

 	var objUsers = [		//create array of objects to store a username and password
		{ username: "Ellin",
		  password: "1234"
		},
		{ username: "Aoife",
		  password: "2345"
		},
	 ]
 
	var currentUsername;
	var currentPassword;
	var newUsername;
	var newPassword;

function checkCredentials(){ 		//Login button pressed - check whether credentials match existing user

		var currentUsername = document.getElementById("usernameInput").value;
		var currentPassword = document.getElementById("passwordInput").value;
	 
	 //iterate through stored usernames
	  for (i = 0; i < objUsers.length; i++) {
		 
		 
		 //var savedUsernames = JSON.parse(localStorage.getItem("storedUsernames")); //get list of stored usernames
		
		// check if username matches array content: if true, check password. If false, display error message.
			 if (currentUsername == objUsers[i].username && currentPassword == objUsers[i].password){
					
				//redirect to homepage
				window.location.replace("../homepage.html");
					
				return
			}
			
			 document.getElementById("loginMessage").innerHTML = "Username and password combination incorrect";

	 }
 }
 
 function signUp(){ //if sign up is clicked, store the username and password and add it to the array
	
	 newUsername = document.getElementById("usernameInput").value;
	 newPassword = document.getElementById("passwordInput").value;
	 
	 var objNewUser = {
		 username: newUsername,
		 password: newPassword
	 }
	 
	 //check that username is not already taken
	 for (i=0; i < objUsers.length; i++){
		 
		 if (newUsername == objUsers[i].username){
			 
			 document.getElementById("loginMessage").innerHTML = "Username " + newUsername + " is already taken."
			 return
		 }
		 else if (newPassword.length < 8){
			 document.getElementById("loginMessage").innerHTML = "Your password must be at least 8 characters long";
			 return
		 }
			
	 }	 
	 
	 objUsers.push(objNewUser);
	 document.getElementById("loginMessage").innerHTML = "Welcome " + newUsername + "! You can now log in."
 }