
document.getElementById("cvTab").addEventListener("click", cv);
document.getElementById("downloadsTab").addEventListener("click", downloads);
document.getElementById("homeTab").addEventListener("click", home);
document.getElementById("calculatorSubmenu").addEventListener("click", calculator);
document.getElementById("hangmanSubmenu").addEventListener("click", hangman);

 function cv(){
	 window.location.href = "cv.html";
 }
 
  function downloads(){
	 window.location.href = "downloads.html";
 }
 
  function home(){
	 window.location.href = "../homepage.html";
 }
 
 function calculator(){
	 window.location.href = "calculator.html";
 }
 
  function hangman(){
	 window.location.href = "hangman.html";
 }