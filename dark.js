var darkMode;

function getDarkMode(){
  var currentURL = window.location.href;
  if(currentURL == "https://Site-CSS-redo.hdprojects.repl.co"){
    let top = document.getElementById("repl")
    top.innerHTML = "<h1>This is an indev website go <a href=\"https://hdprojects.dev/\">Here</a> to get a more stable version</h1>"
  }
}