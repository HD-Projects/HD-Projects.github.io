
if(!localStorage.getItem("darkMode")) {
  localStorage.setItem("darkMode", 0);
}

var darkModeInt = parseInt(localStorage.getItem("darkMode"));
var darkMode;

if(darkModeInt == 1){
  darkMode = true;
  document.getElementById('body').style.backgroundColor = "#000000";
  document.getElementById('body').style.color = "#ffffff";
}else{
  var darkMode = false;
  document.getElementById('body').style.backgroundColor = "#ffffff";
  document.getElementById('body').style.color = "#000000";
}

function toggle(){
  darkMode = !darkMode;
  if(darkMode){
    document.getElementById("body").className = "w3-dark-grey w3-container w3-center w3-border";
    localStorage.setItem("darkMode", 1);
  }else{
    document.getElementById("body").className = "w3-container w3-center w3-border";
    localStorage.setItem("darkMode", 0);
  }
}