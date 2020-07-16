document.getElementById("homeTab").addEventListener("click", home);
document.getElementById("downloadsTab").addEventListener("click", downloads);
document.getElementById("miniProjectsTab").addEventListener("click", miniProjects);

 function home(){
	 window.location.href = "../homepage.html";
 }
 
  function downloads(){
	 window.location.href = "downloads.html";
 }
 
   function miniProjects(){
	 window.location.href = "mini projects.html";
 }

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("collActive");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}