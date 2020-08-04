var darkMode;

function getDarkMode(){
  var currentURL = window.location.href;
  if(currentURL.includes("repl")){
    let top = document.getElementById("repl")
    top.innerHTML = "<h1>This is an indev website go <a href=\"https://hd-projects.github.io/\">Here</a> to get a more stable version</h1>"
  }
}