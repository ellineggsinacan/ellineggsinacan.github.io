document.getElementById("cvTab").addEventListener("click", cv);
document.getElementById("downloadsTab").addEventListener("click", downloads);
document.getElementById("homeTab").addEventListener("click", home);
document.getElementById("hangmanSubmenu").addEventListener("click", hangman);

 function hangman(){
	 window.location.href = "hangman.html";
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
 
document.getElementById("delButton").addEventListener("click", deletechar);

document.getElementById("clrButton").addEventListener("click", clearhistory);

document.getElementById("offButton").addEventListener("click", poweroff);

document.getElementById("onButton").addEventListener("click", poweron);

document.getElementById("7Button").addEventListener("click", function(){
  calculatorOperation("7");
  });
document.getElementById("8Button").addEventListener("click", function(){
  calculatorOperation("8");
  });
document.getElementById("9Button").addEventListener("click", function(){
  calculatorOperation("9");
  });
document.getElementById("divButton").addEventListener("click", function(){
  calculatorOperation("/");
  });
document.getElementById("multButton").addEventListener("click", function(){
  calculatorOperation("*");
  });
document.getElementById("minusButton").addEventListener("click", function(){
  calculatorOperation("-");
  });
document.getElementById("addButton").addEventListener("click", function(){
  calculatorOperation("+");
  });
document.getElementById("pointButton").addEventListener("click", function(){
  calculatorOperation(".");
  });

document.getElementById("equalButton").addEventListener("click", calculate);

document.getElementById("4Button").addEventListener("click", function(){
  calculatorOperation("4");
  });
document.getElementById("5Button").addEventListener("click", function(){
  calculatorOperation("5");
  });
document.getElementById("6Button").addEventListener("click", function(){
  calculatorOperation("6");
  });
document.getElementById("1Button").addEventListener("click", function(){
  calculatorOperation("1");
  });
document.getElementById("2Button").addEventListener("click", function(){
  calculatorOperation("2");
  });
document.getElementById("3Button").addEventListener("click", function(){
  calculatorOperation("3");
  });
document.getElementById("0Button").addEventListener("click", function(){
  calculatorOperation("0");
  });
  
document.getElementById("delButton").disabled = true;	//start with all buttons disabled except ON
document.getElementById("clrButton").disabled = true;
document.getElementById("7Button").disabled = true;
document.getElementById("8Button").disabled = true;
document.getElementById("9Button").disabled = true;
document.getElementById("divButton").disabled = true;
document.getElementById("4Button").disabled = true;
document.getElementById("5Button").disabled = true;
document.getElementById("6Button").disabled = true;
document.getElementById("multButton").disabled = true;
document.getElementById("1Button").disabled = true;
document.getElementById("2Button").disabled = true;
document.getElementById("3Button").disabled = true;
document.getElementById("equalButton").disabled = true;
document.getElementById("minusButton").disabled = true;
document.getElementById("pointButton").disabled = true;
document.getElementById("0Button").disabled = true;
document.getElementById("addButton").disabled = true;
document.getElementById("offButton").disabled = true;


var fullEquation = "";

function calculatorOperation(buttonValue){
	
	fullEquation = fullEquation + buttonValue;
	document.getElementById("calcTopScreen").innerHTML = fullEquation;

}

function calculate(){
	var result = eval(fullEquation);
	document.getElementById("calcBottomScreen").innerHTML = result;
	fullEquation = result.toString();
}

function deletechar(){
	fullEquation = fullEquation.substring(0, fullEquation.length -1);
	document.getElementById("calcTopScreen").innerHTML = fullEquation;
}

function clearhistory()
{
	fullEquation = "";
	document.getElementById("calcTopScreen").innerHTML = "0";
	document.getElementById("calcBottomScreen").innerHTML = "";
}

function poweron()
{
	document.getElementById("onButton").disabled = true;
	
	document.getElementById("offButton").disabled = false;
	document.getElementById("delButton").disabled = false;	//start with all buttons disabled except ON
	document.getElementById("clrButton").disabled = false;
	document.getElementById("7Button").disabled = false;
	document.getElementById("8Button").disabled = false;
	document.getElementById("9Button").disabled = false;
	document.getElementById("divButton").disabled = false;
	document.getElementById("4Button").disabled = false;
	document.getElementById("5Button").disabled = false;
	document.getElementById("6Button").disabled = false;
	document.getElementById("multButton").disabled = false;
	document.getElementById("1Button").disabled = false;
	document.getElementById("2Button").disabled = false;
	document.getElementById("3Button").disabled = false;
	document.getElementById("equalButton").disabled = false;
	document.getElementById("minusButton").disabled = false;
	document.getElementById("pointButton").disabled = false;
	document.getElementById("0Button").disabled = false;
	document.getElementById("addButton").disabled = false;

	document.getElementById("calcTopScreen").innerHTML = "0";
}

function poweroff()
{
	document.getElementById("offButton").disabled = true;
	
	document.getElementById("onButton").disabled = false;
	document.getElementById("delButton").disabled = true;	//start with all buttons disabled except ON
	document.getElementById("clrButton").disabled = true;
	document.getElementById("7Button").disabled = true;
	document.getElementById("8Button").disabled = true;
	document.getElementById("9Button").disabled = true;
	document.getElementById("divButton").disabled = true;
	document.getElementById("4Button").disabled = true;
	document.getElementById("5Button").disabled = true;
	document.getElementById("6Button").disabled = true;
	document.getElementById("multButton").disabled = true;
	document.getElementById("1Button").disabled = true;
	document.getElementById("2Button").disabled = true;
	document.getElementById("3Button").disabled = true;
	document.getElementById("equalButton").disabled = true;
	document.getElementById("minusButton").disabled = true;
	document.getElementById("pointButton").disabled = true;
	document.getElementById("0Button").disabled = true;
	document.getElementById("addButton").disabled = true;

	fullEquation ="";
	document.getElementById("calcTopScreen").innerHTML = fullEquation;
	document.getElementById("calcBottomScreen").innerHTML = fullEquation;
}