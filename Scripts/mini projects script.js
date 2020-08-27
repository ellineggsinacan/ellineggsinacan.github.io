
document.getElementById("cvTab").addEventListener("click", cv);
document.getElementById("downloadsTab").addEventListener("click", downloads);
document.getElementById("homeTab").addEventListener("click", home);
document.getElementById("calculatorSubmenu").addEventListener("click", calculator);
document.getElementById("hangmanSubmenu").addEventListener("click", hangman);
document.getElementById("matchPairsSubmenu").addEventListener("click", matchPairs);

 function cv(){
	 window.location.href = "cv.html";
 }
 
  function downloads(){
	 window.location.href = "downloads.html";
 }
 
  function home(){
	 window.location.href = "../index.html";
 }
 
 function calculator(){
	 window.location.href = "calculator.html";
 }
 
  function hangman(){
	 window.location.href = "hangman.html";
 }
 
   function matchPairs(){
	 window.location.href = "match pairs.html";
 }