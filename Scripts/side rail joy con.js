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

const captions = ['Click on the rail\'s screw to remove the controller\'s back case', 'Click on one of the ribbon cable screw.', 'Click on the lock bracket\'s screw.', 'Click on the lock bracket.',
  'Click on the rail lock.', 'Repeat the process in reverse to reassemble.']

const instructions = ['This slideshow will illustrate how to completely disassemble the side rail for your Nintendo Switch Joy Con controller. \n\n Each image is interactive. \n\n\n\n1. Firstly, remove the screw holding the rail to the back case.',
  'Step 2: Remove the ribbon cable \n\n 1. Using a Phillips head screwdriver, remove the two screws holding down the ribbon cable. \n\n\n Note that the lock button is loose in the back case, so be careful not to lose it.',
  'Step 3: Remove the lock bracket screw\n\n 1. Remove the black screw at the top of the rail, holding in the lock and bracket.',
  'Step 4: Remove the lock bracket\n\n 1. Using some tweezers or thin pliers, gently remove the silver lock bracket. \n2. This is easiest if the tool can slide underneath the bracket to slowly pry it out. \n\n\n Be careful not to bend the bracket too much out of shape.',
  'Step 5: Remove the lock\n\n 1. Gently remove the plastic lock from it\'s seat. \n2. There is a small spring underneath the lock, so be careful not to lose it.',
  'Step 6: Repeat in reverse to reassemble \n\n\n At this stage, the SL and SR buttons are loose and can be easily swapped for new ones.']
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
}


//  decrement slide index before changing slide
function nextImage () {
  slideIndex = slideIndex + 1
  showSlides(slideIndex)
}

showSlides(slideIndex)
