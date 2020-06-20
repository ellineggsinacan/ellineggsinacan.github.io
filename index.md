<!-- my first attempt at a website. This will be the homepage -->
<!-- page pixels start at left 8px end at left 1652px -->

<!doctype html>													<!-- use latest version of html-->
<html>
	<head>
		<link rel="stylesheet" href="Styles/style.css" />		<!-- link style sheet for element styles -->
	</head>
		
	<!-- start main body -->
	<body>
		
		<title> login</title>							<!-- set the title of the webpage that will appear in the tab -->
				
		<!-- new header section -->
		<header>

			<h1 style="width:30%; height:5%; position:absolute; top:15%; left:35%;"> Welcome! </h> 				<!-- set main heading on page -->
			
		</header>
		
		<!-- new section for log in area -->
		<div style="position:absolute; width:30%; height:50%; background:#89C7EB; top:21.5%; left:35%; border-radius: 0 0 15% 15%;" id="logInArea">
		
			<p class="mainparagraph"> Please login in or sign up </p><br>
			<p class="mainparagraph" style="display:inline; position:relative; left:12%; width:10%;">Username:</p><br><br>
			<p class="mainparagraph" style="display:inline; position:relative; left:12%; width:10%;">Password:</p><br><br>
			
			<!-- sub area for input boxes -->
			<div style="position:absolute; width:50%; height:15%; top:14.5%; left:37%;">
			
			<input type="text" placeholder="username" class="logininput" id="usernameInput"> <br><br>
			<input type="password" placeholder="password" class="logininput" id="passwordInput"> <br>
			
			</div><br><br><br>
			
			<button class="loginbuttons" style="left:35%;" onclick="checkCredentials()">Login</button><br><br>
			<button class="loginbuttons" style="left:35%;" onclick="signUp()">Sign Up</button><br><br>
			
			<p class="mainparagraph" style="color:red;" id="loginMessage"></p><br>
		
		</div>
		
		<!-- include script -->
		<script src="Scripts/main script.js"></script>
		
	</body>
		
</html>
		
