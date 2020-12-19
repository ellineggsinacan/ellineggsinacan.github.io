document.getElementById('homeTab').addEventListener('click', home)
document.getElementById('cvTab').addEventListener('click', cv)
document.getElementById('miniProjectsTab').addEventListener('click', miniProjects)

function home () {
  window.location.href = '../index.html'
}

function cv () {
  window.location.href = 'cv.html'
}

function miniProjects () {
  window.location.href = 'mini projects.html'
}

var slideIndex = 1

const captions = ['Click on the image to see a full tear down of the controller.', 'Click on one of the housing screws.', 'Click on the battery connector.', 'Click on one of the midframe screws.',
  'Click on the ZL cable connector.', 'Click on one of the side rail ribbon connectors.', 'Click on the L button.', 'Click on the L button\'s ribbon connector.', 'Click on the analog stick\'s connector.',
  'Click on the vibration motor connector.', 'Click on the vibration motor.', 'Click on one of the button membranes.', 'Repeat in reverse to reassemble.']

const instructions = ['This slideshow will illustrate how to completely disassemble your left Nintendo Switch Joy-Con controller. \n\n Each image is interactive.',
  'Step 1: Open the controller  \n\n 1. Remove the four housing screws on the back with a tri-wing screwdriver.',
  'Step 2: Remove the battery \n\n 1. Disconnect the battery connector. \n 2. Pry the battery away from the midframe by using a plastic pry tool. \n\n\n It is important not to use any metal tools when touching the batttery.',
  'Step 3: Remove the midframe\n\n 1. Use a Phillips head screwdriver to remove the five screws.\n\n\n Do not pull the midframe with force. There is a delicate ribbon cable that connects the midframe to the main board.',
  'Step 4: Disconnect the ZL button\n\n 1. Use a plastic spudger to unclip the ZL button\'s ribbon cable.\n 2. Use tweezers to gently pull the cable out of the connector.',
  'Step 5: Remove the side rail\n\n 1. Use a plastic spudger to unclip the two connectors for the side rail.\n 2. Gently pull the ribbon cables out with a tweezers.\n 3. The side rail should be completely free from the controller.',
  'Step 6: Remove the L button\n\n 1. Carefully pull out the L button. \n\n\n There is a small spring holding the button in place. Be careful not to lose this.',
  'Step 7: Remove the L button cable\n\n 1. Disconnect the ribbon cable connector.\n2. With a Phillips head screwdriver, remove the three screws holding down the L button\'s circuitry.\n3. Carefully peel back the cable to remove it.\n\n\nNotice that the cable is also connected to the plus button\'s circuitry.',
  'Step 8 : Remove the analog stick\n\n 1. Disconnect the ribbon cable connector. \n 2. Remove the two screws holding in the analog stick.\n 3. Slowly push the analog stick through the hole to remove it.',
  'Step 9: Remove the main board\n\n 1. The last connector holding in the circuit board is the vibration motor.\n 2. Using some tweezers or pliers, gently pull the white connector head.\n 3. The circuit board can now be lifted out of the controller.',
  'Step 10: Remove the vibration motor\n\n 1. Pull the vibration motor out of the plastic case. \n\n\n Note that there is adhesive underneath the motor, so it may require prying.',
  'Step 11: Remove the button membranes\n\n 1. Pull off the button membranes to reveal the buttons underneath. \n\n\n There is a membrane for the directional pad, the plus button, and the capture button.',
  'Step 12: Remove the buttons\n\n 1. Tip out the plastic buttons. This will leave just the bare housing.\n\n\n This entire slideshow can be played backwards to reassemble the controller.']
// increment slide index before changing slides
function plusSlides (n) {
  showSlides(slideIndex += n)
}

//  change current slide
function showSlides (n) {
  var i
  var slides = document.getElementsByClassName('slides')
  var captionText = document.getElementById('slideCaption')
  var instructionText = document.getElementById('slideDescription')
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  slides[slideIndex - 1].style.display = 'block'
  captionText.innerHTML = captions[slideIndex - 1]
  instructionText.innerHTML = instructions[slideIndex - 1]
  
  console.log(slides);
}

//  decrement slide index before changing slide
function nextImage () {
  slideIndex = slideIndex + 1
  showSlides(slideIndex)
}

showSlides(slideIndex)
