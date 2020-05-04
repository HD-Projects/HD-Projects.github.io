var darkMode;

if(!localStorage.getItem("darkMode")) {
  localStorage.setItem("darkMode", 0);
}

function getDarkMode(){
  var darkModeInt = parseInt(localStorage.getItem("darkMode"));
  
  if(darkModeInt == 1){
    darkMode = true;
  }else{
    darkMode = false;
  }
  if(darkMode){
    document.getElementById("body").className = "w3-black w3-container w3-center w3-border";
    document.getElementById("mySidebar").className = "w3-black w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left";
    localStorage.setItem("darkMode", 1);
  }else{
    document.getElementById("body").className = "w3-container w3-center w3-border";
    document.getElementById("mySidebar").className = "w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left";
    localStorage.setItem("darkMode", 0);
  }
}

function toggle(){
  darkMode = !darkMode;
  if(darkMode){
    document.getElementById("body").className = "w3-black w3-container w3-center w3-border";
    document.getElementById("mySidebar").className = "w3-black w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left";
    localStorage.setItem("darkMode", 1);
  }else{
    document.getElementById("body").className = "w3-container w3-center w3-border";
    document.getElementById("mySidebar").className = "w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left";
    localStorage.setItem("darkMode", 0);
  }
}

window.onload = "getDarkMode"