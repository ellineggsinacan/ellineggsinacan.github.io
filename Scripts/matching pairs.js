document.getElementById("cvTab").addEventListener("click", cv);
document.getElementById("downloadsTab").addEventListener("click", downloads);
document.getElementById("homeTab").addEventListener("click", home);
document.getElementById("calculatorSubmenu").addEventListener("click", calculator);
document.getElementById("hangmanSubmenu").addEventListener("click", hangman);
document.getElementById("tetrisSubmenu").addEventListener("click",tetris);


//define an array that contains the IDs for each of the cards
var elements = ["pairsCard1", "pairsCard2", "pairsCard3", "pairsCard4", "pairsCard5", "pairsCard6", "pairsCard7","pairsCard8","pairsCard9","pairsCard10","pairsCard11","pairsCard12","pairsCard13","pairsCard14",
				"pairsCard15","pairsCard16","pairsCard17","pairsCard18","pairsCard19","pairsCard20","pairsCard21","pairsCard22","pairsCard23","pairsCard24",];
var currentID = "";

var backImages =["tarot chariot.jpg", "tarot empress.jpg", "tarot hands.jpg", "tarot hermit.jpg", "tarot jester.jpg", "tarot lion.jpg", "tarot lovers.jpg", "tarot ship.jpg", "tarot sun.jpg", "tarot tree.jpg", "tarot bow.jpg",
				"tarot major.jpg"];

//create an onclick event for each of the cards. All cards call the same flipCard fuction
for (var i = 0; i < elements.length; i++) {
	document.getElementById(elements[i]).addEventListener("click", flipCard);
}

var randomNumber = 0;
var completedNumbers = [];
var counts = {};
var randomCard = 0;
var completedCards = [];
var flippedCards = [];
var score = 0;
var lives = 20;
var cardIndexes = [];
var match = false;
var matchedCards =[];

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//populate the front of all cards
for (var i = 1; i < elements.length+1; i++) {

	//create image element for all card divs
	document.getElementById("frontImage"+i).src = "../Images/tarot front.jpg";


}

//randomly populate cards with a back image

//shuffle the elements in the images arrays
shuffle(backImages);

//iterate through each card and set the image on the back

for(var j = 0; j <2; j++) {

		for (var i = 1; i < 25; i++) {

			targetImage = "backImage"+i;

			//pick a random number betweeen 1 and 12 since there are 12 different types of cards
			 randomNumber = Math.floor(Math.random() * 12) + 1;

			 //check if this number has already been selected
			 if (completedNumbers.includes(randomNumber)){


				//check if all numbers have been selected
				completedNumbers.sort(function(a, b){return a-b});

				if(arrayEquals(completedNumbers,[1,2,3,4,5,6,7,8,9,10,11,12]))
				{
					continue;
				}

				else
				{

					//check how many times this randomNumber has already been chosen
					for (var i = 0; i < completedNumbers.length; i++) {

					  var num = completedNumbers[i];
					  counts[num] = counts[num] ? counts[num] + 1 : 1;

						 //if it has already occured twice, pick a different number
						 if(counts[num] >= 2)
						 {
							 continue;
						 }

						 else
						 {

							 continue;
						 }

					}
				}

			 }

			 else
			 {
				 //assign an image to the card depending on the random number selected

				 //ensure that this card has not received an image yet
				 while (1)
				 {
					 randomCard = Math.floor(Math.random() * 24) + 1;

					 if(completedCards.includes(randomCard))
					 {

						 continue;
					 }

					 else
					 {
						document.getElementById("backImage"+randomCard).src = "../Images/"+backImages[randomNumber-1];
						completedNumbers.push(randomNumber);
						completedCards.push(randomCard);

						break;

					 }
				 }
			 }


		}

completedNumbers = [];
i = 1;
}


//////////////// function defintions /////////////////////////////////////////////////////////////////////






//functions that navigate to different pages should the top tab buttons be pressed
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

 function tetris(){
	 window.location.href = "tetris.html";
 }

 //flips over the specified card
 function flipCard(){

	currentID = jQuery(this).attr("id");

	//while a card is being flipped, disable all other cards

	//flip the card
	document.getElementById(currentID).classList.toggle("pairsCardFlipped");

	//record which cards are currently flipped over
	flippedCards.push(currentID);


	//check if 2 cards have been flipped
	if(flippedCards.length >= 2)
	{
		//if the card is not flipped, disable it
		for(i = 0; i < elements.length; i++)
		{
			if (elements[i] !==currentID){

				document.getElementById(elements[i]).style.pointerEvents="none";

			}

			else {
				//do nothing

			}

		}

		//check whether cards match
		matchCards();

		//only reset the cards if they did not match
		if(match == false)
		{
		//reset each of the flipped cards
		setTimeout(resetCard, 1500);
		//resets flipped cards
		}
		//other wise just re-enable the cards
		else
		{
			enableCards();
			flippedCards=[];
		}



	}
	else
	{

	}

 }



//checks whether cards match
function matchCards()
{
	//proceed if at least 2 cards have been flipped
	if(flippedCards.length >=2)
	{
		//get the index of each card that has been flipped
		for(i=0; i<flippedCards.length; i++)
		{
			var currentCard = flippedCards[i];
			var cardIndex = currentCard.replace("pairsCard", "");

			cardIndexes.push(cardIndex);


		}


		//ensure that the same card has not been clicked twice
		if(cardIndexes[0] !== cardIndexes[1])
		{

			console.log("not same card");

			//get the src of backImage for each of the cards
			var cardImage1 = document.getElementById("backImage"+cardIndexes[0]).src;
			var cardImage2 = document.getElementById("backImage"+cardIndexes[1]).src;

			//if the src for each is the same, increase the score
			if(cardImage1 == cardImage2)
			{
				//check if all cards have been matched correctly
				if(score ==11)
				{
					setTimeout(gameWon, 500);
				}
				else
				{
					//increase score
					score=score+1;
					match = true;


					//store which cards have already been matched
					matchCard1 = "pairsCard"+cardIndexes[0];
					matchCard2 = "pairsCard"+cardIndexes[1];
					matchedCards.push(matchCard1, matchCard2);
				}

			}

			//if the src for each is different, decrease the score
			else
			{
				//decrease score
				lives = lives-1;
				match = false;

				//check how many lives are left
				if(lives <= 0)
				{
					//game over
					setTimeout(gameOver, 500);
				}
			}


			document.getElementById("score").innerHTML = score;
			document.getElementById("lives").innerHTML = lives;
		}
	}
	cardIndexes = [];

}


//game won message
function gameWon()
{
	window.confirm("You Won!");
	location.reload();
}


//game over message
function gameOver()
{
	window.confirm("Game Over!");
	location.reload();
}

 //resets all flipped cards
function resetCard(){

		//toggle flip for each flipped card

		for(i = 0; i <flippedCards.length; i++)
		{
			document.getElementById(flippedCards[i]).classList.toggle("pairsCardFlipped");

		}

		flippedCards=[];
		enableCards();

	}


 //enables all cards on the screen
 function enableCards(){

	 //iterate through all cards
	 for (var i = 0; i < elements.length; i++)
	{
		//ensure that card has not already been matched (these should remain disabled)
		if(matchedCards.includes(elements[i]))
		{
			//do not enable
		}
		else
		{
		//enable
			document.getElementById(elements[i]).style.pointerEvents="auto";
		}
	}

 }


 function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}
