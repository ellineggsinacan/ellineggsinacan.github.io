document.addEventListener('DOMContentLoaded', () => {

  document.getElementById("cvTab").addEventListener("click", cv);
  document.getElementById("downloadsTab").addEventListener("click", downloads);
  document.getElementById("homeTab").addEventListener("click", home);
  document.getElementById("hangmanSubmenu").addEventListener("click", hangman);
  document.getElementById("matchPairsSubmenu").addEventListener("click",matchPairs);
  document.getElementById("calculatorSubmenu").addEventListener("click",calculator);

   function hangman(){
  	 window.location.href = "hangman.html";
   }

   function calculator(){
  	 window.location.href = "calculator.html";
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

     function matchPairs(){
  	 window.location.href = "match pairs.html";
   }

   const grid = document.querySelector('.grid');
   let squares =Array.from(document.querySelectorAll('.grid div'));
   const width = 10;
   const scoreDisplay = document.querySelector('#score');
   const startButton = document.querySelector('#startButton');
   let score = 0;
   let moveInterval;

   const colours = [
     '#FFA62B',
     'red',
     'green',
     'yellow',
     'purple'
   ]

   //setting shapes
   const lShape = [
     [1, width+1, width*2+1, 2],
     [width, width+1, width+2, width*2+2],
     [1, width+1, width*2+1, width*2],
     [0, width, width+1, width+2]
   ]

   const zShape = [
     [width, width+1, 1, 2],
     [1, width+1, width+2, width*2+2],
     [width*2, width*2+1, width+1, width+2],
     [0, width,width+1, width*2+1]
   ]

   const tShape = [
     [1, width, width+1, width+2],
     [1, width+1, width*2+1, width+2],
     [width, width+1, width+2, width*2+1],
     [width, 1, width+1, width*2+1]
   ]

     const sqShape = [
       [0,1,width,width+1],
       [0,1,width,width+1],
       [0,1,width,width+1],
       [0,1,width,width+1]
     ]

     const lineShape = [
       [1, width+1, width*2+1, width*3+1],
       [width, width+1, width+2,width+3],
       [1, width+1, width*2+1, width*3+1],
       [width, width+1, width+2,width+3]
     ]

     const theShapes = [lShape, zShape, tShape, sqShape, lineShape];

     //random select a tetris shape
     let randomShape = Math.floor(Math.random()*theShapes.length);
     let nextRandomShape = 0;
     let randomRotation = Math.floor(Math.random()*theShapes.length);
     let currentPosition = 3;
     let currentRotation = 0;
     let currentShape = theShapes[randomShape][currentRotation];

     //draw the shape
     function draw(){
       currentShape.forEach(index =>{
         squares[currentPosition+index].classList.add("tetrisShape");
         squares[currentPosition+index].style.backgroundColor = colours[randomShape];
       })
     }

     //undraw the shape
     function undraw(){
       currentShape.forEach(index =>{
         squares[currentPosition+index].classList.remove("tetrisShape");
         squares[currentPosition+index].style.backgroundColor = '';
       })
     }

     //move shape periodically
     //moveInterval = setInterval(moveDown, 1000)
     function moveDown(){
       undraw();
       currentPosition = currentPosition + width;
       draw();
       freeze();
     }

     //assign key codes and functions
     function control(e){
       if(e.keyCode === 37)
       {
         moveLeft();
       }

       else if(e.keyCode === 39)
       {
         moveRight();
       }
       else if(e.keyCode === 38)
       {
         rotate();
       }
       else if(e.keyCode === 40)
       {
         moveDown();
       }
     }

     document.addEventListener('keyup', control);

     //freeze the shape from moving
     function freeze(){
       if(currentShape.some(index => squares[currentPosition + index + width].classList.contains("taken")))
       {
         currentShape.forEach(index => squares[currentPosition + index].classList.add("taken"));

         //then start a new shape
         randomShape = nextRandomShape;
         nextRandomShape = Math.floor(Math.random()*theShapes.length);
         currentShape = theShapes[randomShape][currentRotation];
         currentPosition = 3;
         draw();
         displayNextShape();
         addScore();
         gameOver();

       }
     }

     //move the shape left unless it is already at the border
     function moveLeft(){
       undraw();
       const isAtLeftEdge = currentShape.some(index => (currentPosition + index)% 10 === 0 )

       if(!isAtLeftEdge)
       {
         currentPosition = currentPosition - 1;

       }

       if(currentShape.some(index => squares[currentPosition + index].classList.contains("taken")))
       {
         currentPosition = currentPosition +1;
       }

       draw();
     }

     //move the shape right unless it is already at the border
     function moveRight(){
       undraw();
       const isAtRightEdge = currentShape.some(index => (currentPosition + index)% width === width - 1 )

       if(!isAtRightEdge)
       {
         currentPosition = currentPosition + 1;

       }

       if(currentShape.some(index => squares[currentPosition + index].classList.contains("taken")))
       {
         currentPosition = currentPosition -1;
       }

       draw();
     }

    //rotate to the next position for the shape
     function rotate(){

       undraw();
       currentRotation++;

       if (currentRotation === currentShape.length)
       {
         currentRotation = 0;
       }

      currentShape = theShapes[randomShape][currentRotation];
     }

     //show upcoming shapes
     const miniSquares = document.querySelectorAll('.miniGrid div');
     const miniWidth = 5;
     const miniIndex = 0;

     //the shapes without their rotations
     const nextShape = [
      [miniWidth+2, miniWidth*2+2,miniWidth+1, miniWidth*2+3], //l shape
      [miniWidth*2+1, miniWidth*2+2, miniWidth+2, miniWidth+3], //z shape
      [2+miniWidth, miniWidth*2+1, miniWidth*2+2, miniWidth*2+3], //t shape
      [1+miniWidth,2+miniWidth,miniWidth*2+1,miniWidth*2+2,3+miniWidth, 3+miniWidth*2 ], //square shape
      [2, miniWidth+2, miniWidth*2+2, miniWidth*3+2] //line shape
     ]

     //display the mini shapes
     function displayNextShape(){
       miniSquares.forEach(square => {
         square.classList.remove("tetrisShape")
         square.style.backgroundColor = '';
       })

       nextShape[nextRandomShape].forEach(index => {
         miniSquares[miniIndex + index].classList.add("tetrisShape");
         miniSquares[miniIndex+index].style.backgroundColor = colours[nextRandomShape];
       })
     }

     //add start and pause functionality
     startButton.addEventListener('click', () =>{
       //paused
       if(moveInterval){
         clearInterval(moveInterval);
         moveInterval = null;
       }
       //play
       else{
         draw();
         moveInterval = setInterval(moveDown, 1000);
         nextRandomShape = Math.floor(Math.random()*theShapes.length);
         displayNextShape();
       }
     })

     //add scoreDisplay
     function addScore(){
       for(let i=0; i<squares.length - 10; i+=width){
         const row = [i, i+1, i+2, i+3, i+4,i+5, i+6, i+7, i+8, i+9];

         if(row.every(index => squares[index].classList.contains('taken'))){

           score = score = score + 10;
           scoreDisplay.innerHTML = score;

           row.forEach(index =>{
             squares[index].classList.remove('taken');
             squares[index].classList.remove('tetrisShape');
             squares[index].style.backgroundColor = '';
           })
           const squaresRemoved = squares.splice(i,width);
           squares = squaresRemoved.concat(squares);
           squares.forEach(cell => grid.appendChild(cell));
         }
       }
     }

     //game over definition
     function gameOver(){

         if (currentShape.some(index=> squares[index+currentPosition].classList.contains('taken'))){
           scoreDisplay.innerHTML = 'end';
           clearInterval(moveInterval);

           alert('Game Over!');
           setInterval(reload, 1000);
         }
     }

     //reload the page
     function reload(){
       location.reload();
     }
//end of js
})
