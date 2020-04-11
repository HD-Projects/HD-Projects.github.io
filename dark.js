if(!localStorage.getItem("darkMode")) {
  localStorage.setItem("darkMode", 0);
  alert("local Var Created")
}

var darkModeInt = parseInt(localStorage.getItem("darkMode"));
alert(darkModeInt)
if(darkModeInt == 1){
  var darkMode = true;
  if(darkMode){
    document.getElementById('body').style.backgroundColor = "#000000";
    localStorage.setItem("darkMode", 1);
  }else{
    document.getElementById('body').style.backgroundColor = "#ffffff";
    localStorage.setItem("darkMode", 0);
  }
}else{
  var darkMode = false;
  if(darkMode){
    document.getElementById('body').style.backgroundColor = "#000000";
    localStorage.setItem("darkMode", 1);
  }else{
    document.getElementById('body').style.backgroundColor = "#ffffff";
    localStorage.setItem("darkMode", 0);
  }
}

function toggle(){
  darkMode = !darkMode;
  if(darkMode){
    document.getElementById('body').style.backgroundColor = "#000000";
    localStorage.setItem("darkMode", 1);
  }else{
    document.getElementById('body').style.backgroundColor = "#ffffff";
    localStorage.setItem("darkMode", 0);
  }
}