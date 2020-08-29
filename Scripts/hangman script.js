document.getElementById("cvTab").addEventListener("click", cv);
document.getElementById("matchPairsSubmenu").addEventListener("click", matchPairs);
document.getElementById("calculatorSubmenu").addEventListener("click", calculator);
document.getElementById("tetrisSubmenu").addEventListener("click",tetris);
document.getElementById("downloadsTab").addEventListener("click", downloads);
document.getElementById("homeTab").addEventListener("click", home);
document.getElementById("famousPlacesButton").addEventListener("click", famousPlaces);
document.getElementById("enterButton").addEventListener("click", checkLetter);
document.getElementById("filmsButton").addEventListener("click", films);
document.getElementById("phrasesButton").addEventListener("click", phrases);
document.getElementById("giveUpButton").addEventListener("click", giveup);

document.getElementById("enterButton").disabled = true;
document.getElementById("giveUpButton").disabled = true;


var wordsArray = [];
var buttonIds = ["famousPlacesButton", "filmsButton", "phrasesButton", "enterButton", "giveUpButton"];
var activeWord;
var incorrectGuesses = 0;
var correctGuesses = 0;
var correctLetters = [];
var requiredLetters = 0;
var matchingIndices = [];
var incorrectHistory = "";
let lifeSound = document.getElementById("lifeSound");
let correctSound = document.getElementById("correctSound");


 function calculator(){
	 window.location.href = "calculator.html";
 }

 function tetris(){
  window.location.href = "tetris.html";
 }

  function matchPairs(){
	 window.location.href = "match pairs.html";
 }

 function cv(){
	 window.location.href = "cv.html";
 }

  function downloads(){
	 window.location.href = "downloads.html";
 }

  function home(){
	 window.location.href = "../index.html";
 }

 function phrases(){
	 wordsArray=["a chip on your shoulder", "a dime a dozen", "a piece of cake", "back to square one", "barking up the wrong tree", "beating around the bush", "between a rock and a hard place", "two birds with one stone", "cry over spilt milk", "curiosity killed the cat", "burst your bubble", "elephant in the room", "excuse my french", "jack of all trades", "labour of love", "name and shame", "rack your brains", "take the mickey"];

	disableButtons(true, buttonIds.slice(0, 3))

	disableButtons(false, buttonIds.slice(3));


	 setWord();
	 populatePlaceholderLetters()
 }


 function films(){
	wordsArray = ["the little mermaid", "finding nemo", "shark tale", "corpse bride", "the nightmare before christmas", "pulp fiction", "the dark crystal", "labyrinth", "spirited away", "star wars", "lord of the rings", "rambow", "the godfather", "saw", "elf", "planes trains and automobiles", "some kind of wonderful", "shrek", "ponyo", "spy kids", "the hunger games", "fifty shades of gray", "coraline", "borat", "up", "heathers", "chicken run", "james and the giant peach", "snow white", "frozen", "tangled", "how to train a dragon", "brave", "toy story"];

	disableButtons(true, buttonIds.slice(0, 3))

	disableButtons(false, buttonIds.slice(3));


	 setWord();
	 populatePlaceholderLetters();
 }

 function famousPlaces(){
	 wordsArray = ["las vegas", "mount fuji", "stonehenge", "colosseum", "statue of liberty", "taj mahal", "sydney opera house", "eiffel tower", "great wall of china", "big ben", "leaning tower of pisa", "empire state building", "hollywood", "golden gate bridge", "london eye", "notre dame", "louvre", "berlin wall", "arc de triomphe", "mount everest", "kilimanjaro", "whitehouse", "times square"];

	disableButtons(true, buttonIds.slice(0, 3))

	disableButtons(false, buttonIds.slice(3));


	 setWord();
	 populatePlaceholderLetters();
 }

 function checkLetter(){

	 var  initialInput = document.getElementById("guess").value;
	 var  letterGuessed = initialInput.toLowerCase();

	 //iterate through each character of the word to determine whether the letter is correct
		//iterate through each character of the word to determine whether the letter is correct
	 for (i=0; i<activeWord.length; i++){

		 //check whether the guessed letter matches any character indexes
		 if(letterGuessed == activeWord.charAt(i)){

			 matchingIndices.push(i);

		 }
		 else{
		 }


	 }


	//as long as the guessed letter matches to the active word, populate the letter placeholders accordingly
	 if(matchingIndices.length != 0){

		 for(i=0; i<matchingIndices.length; i++){

			 var letterID = "letterArea" + matchingIndices[i];
			 document.getElementById(letterID).innerHTML = letterGuessed;
		 }

			 //ensure that this letter has not been guessed already before incremementing the number of correct guesses
			 if (correctLetters.includes(letterGuessed)){
				 //do not increment number of correct guesses. Add newest guess to array instead.
			 }

			 else{
         //show correct letter and play correct sounds
        correctSound.play();
				 correctLetters.push(letterGuessed);
				 correctGuesses = correctGuesses + matchingIndices.length;
			 }

	 }
	 else{
     //play life lose sound and add a strike
     lifeSound.play();
		 incorrectGuesses++;

		//add strikout areas
		var leftIndent = 8.33;
		var strikeWidth = 10;
		var strike = document.createElement("P");
		strike.innerHTML = "X";
		strike.classList.add("hangmanCross");
		strike.style.left = ((incorrectGuesses)*leftIndent) + ((incorrectGuesses-1)*strikeWidth) + "%";
		document.getElementById("strikeArea").appendChild(strike);

		//populate history of incorrect guesses
		incorrectHistory = incorrectHistory + " " + letterGuessed;
		document.getElementById("incorrectHistory").innerHTML = incorrectHistory;
	 }

	 //reset matching indices array ready for next input
	 matchingIndices = [];

	 //check number of wrong answers vs correct answers

	 if(incorrectGuesses<5 && correctGuesses == requiredLetters){

		//remove strike message and replace with winning message
		document.getElementById("strikeMessage").remove();

		var winningMessage = document.createElement("P");
		winningMessage.innerHTML = "You won!";
		winningMessage.classList.add("gameOverMessage");
		document.getElementById("strikeMessageArea").appendChild(winningMessage);

		document.getElementById("enterButton").disabled = true;

	 }


	 else if(incorrectGuesses == 5){

		 //remove strike message and replace with game over message
		 document.getElementById("strikeMessage").remove();

		var gameOverMessage = document.createElement("P");
		gameOverMessage.innerHTML = "Game over!";
		gameOverMessage.classList.add("gameOverMessage");
		document.getElementById("strikeMessageArea").appendChild(gameOverMessage);

		document.getElementById("enterButton").disabled = true;

	 }
	 else{

	 }

 }



 function disableButtons(condition, buttonArray){
	 //iterate through the categories buttons to disable them

	 for(i=0; i<buttonArray.length; i++){

		 document.getElementById(buttonArray[i]).disabled = condition;
	 }
 }


 function setWord()
 {
	  activeWord = wordsArray[Math.floor(Math.random()*wordsArray.length)];

	  //populate strikeout message area
	  var strikeMessage = document.createElement("P");
	  strikeMessage.innerHTML = "Five strikes and it's game over!";
	  strikeMessage.classList.add("strikeMessage");
	  strikeMessage.id = "strikeMessage";
	  document.getElementById("strikeMessageArea").appendChild(strikeMessage);
 }



 function populatePlaceholderLetters()
 {

	//calculate the gap that should be left between each letter

	var totalLetterSpace = activeWord.length * 5;
	var numberOfGaps = activeWord.length + 1;
	var spaceForGaps = 100 - totalLetterSpace;
	var percentOfGap = spaceForGaps/numberOfGaps;


	//iterate through each charater within the word
	for(i=0; i<activeWord.length; i++){

	//increment left indent for each input element
	var leftIndent = ((i+1)*percentOfGap)+(i*5);

		//if the word consists of a space, replace with an empty paragraph
		if(activeWord.charAt(i) == " "){

			var spaceArea = document.createElement("P");
			spaceArea.innerHTML = "";
			spaceArea.classList.add("hangmanLetter");
			spaceArea.style.left = leftIndent + "%";
			spaceArea.id = "spaceArea" + i;

			document.getElementById("wordArea").appendChild(spaceArea);
		}

		else{

			var letterArea = document.createElement("P");
			letterArea.innerHTML = "?";
			letterArea.classList.add("hangmanLetter");
			letterArea.style.left = leftIndent + "%";
			letterArea.id = "letterArea" + i;

			//record number of characters required to guess for later
			requiredLetters++;

			 // add the text node to the newly created div
			 document.getElementById("wordArea").appendChild(letterArea);

		}

	}


 }

 function giveup(){
	 //reveal correct word and reset page
	 window.confirm("Correct answer is " + activeWord);
	 location.reload();
 }
