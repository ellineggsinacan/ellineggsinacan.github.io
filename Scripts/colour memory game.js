document.getElementById('cvTab').addEventListener('click', cv)
document.getElementById('downloadsTab').addEventListener('click', downloads)
document.getElementById('miniProjectsTab').addEventListener('click', miniProjects)
document.getElementById('homeTab').addEventListener('click', home)

function cv () {
  window.location.href = 'cv.html'
}

function downloads () {
  window.location.href = 'downloads.html'
}

function miniProjects () {
  window.location.href = 'mini projects.html'
}

function home () {
  window.location.href = '../index.html'
}

const osSelect = document.getElementById('OS')
const instructions = document.getElementById('instructions')
const downloadFile = document.getElementById('downloadFile')
let listItems = []
var i = 0
var node
var textnode

osSelect.onchange = function showInstructions () {
  //  remove all list list items
  while (instructions.hasChildNodes()) {
    instructions.removeChild(instructions.firstChild)
  }
  if (osSelect.value === 'Windows') {
    //  display Windows instructions
    listItems.push('Unzip the downloaded folder.', 'Navigate to Volume >> Install.exe and run the executable. If your PC displays an access prompt, accept and allow access to the installer.',
      'The installer will now check whether your PC contains the necessary NI software to run the game.', 'After completing the installation, the application will run automatically.')

    for (i = 0; i < listItems.length; i++) {
      node = document.createElement('LI')
      textnode = document.createTextNode(listItems[i])
      node.appendChild(textnode)
      instructions.appendChild(node)
    }
    instructions.style.color = '#FFFFFF'
    downloadFile.href = '../Downloads/Memory Game Installer.zip'
  } else if (osSelect.value === 'Mac') {
    const noDownload = 'There is not yet a version for MacOS'
    node = document.createElement('LI')
    textnode = document.createTextNode(noDownload)
    node.appendChild(textnode)
    instructions.appendChild(node)
    instructions.style.color = 'red'
    downloadFile.href = ''
  }

  listItems = []
}
