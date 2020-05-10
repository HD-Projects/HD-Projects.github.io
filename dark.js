var darkMode;

function getDarkMode(){
  var currentURL = window.location.href;
  if(currentURL == "https://hd-projectsgithubio-1.ad101lab.repl.co/"){
    let top = document.getElementById("repl")
    top.innerHTML = "<h1>This is an indev website go https://hd-projects.github.io/ to get a more stable version</h1>"
  }
}