var darkMode;
function getDarkMode(){
  if(!localStorage.getItem("darkMode")) {
    localStorage.setItem("darkMode", 0);
  }

  var darkModeInt = parseInt(localStorage.getItem("darkMode"));

  if(darkModeInt == 1){
    darkMode = true;
    document.getElementById("body").className = "w3-dark-grey w3-container w3-center w3-border";
    document.getElementById("mySidebar").className = "w3-dark-grey w3-container w3-center w3-border";
  }else{
    var darkMode = false;
    document.getElementById("body").className = "w3-container w3-center w3-border";
    document.getElementById("mySidebar").className = "w3-container w3-center w3-border";
  }
}

function toggle(){
  darkMode = !darkMode;
  if(darkMode){
    document.getElementById("body").className = "w3-dark-grey w3-container w3-center w3-border";
    document.getElementById("mySidebar").className = "w3-dark-grey w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left";
    localStorage.setItem("darkMode", 1);
  }else{
    document.getElementById("body").className = "w3-container w3-center w3-border";
    document.getElementById("mySidebar").className = "w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left";
    localStorage.setItem("darkMode", 0);
  }
}