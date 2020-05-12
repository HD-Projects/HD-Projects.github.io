
  var clickerSpeed = 2000;
  var airdropPlanes = 0;
  var cookiesPerSecond = 0;
  var iterationVar3 = 0;
  var iterationVar2 = 0;
  var iterationVar1 = 0;
  var minerPrice = 15;
  var machinePrice = 100;
  var minerMachine;
  var cookieMachines = 0;
  var myVar;
  var machineChipsPerSecond = 5;
  var autoclickerChipsPerSecond = 0.5
  var clicks = 0;
  var miners = 0;
  var airdropPrice = 2000;
  var airdroppper;
  var clicksPerCookie = 1;
  var dropPlaneChipsPerSecond = 25;
  var  minerMachineSpeed = 200;
  var airdropPlaneDropSpeed = 40;

/*
var doneTheStuff;

function getCookies(){
  if(!localStorage.getItem("cookies")) {
    localStorage.setItem("cookies", 0);
  }else{
    clicks = parseInt(localStorage.getItem("cookies"))
  }
}

function whatever() {
  if (!doneTheStuff) {
    doneTheStuff = true;
    getCookies();
setTimeout(getCookies, 100);
  }
}

*/

function addClick() {
  clicks += clicksPerCookie;
  
  document.getElementById("chips").innerHTML = clicks;
    
}
   
 function addDude() {
   if (clicks > minerPrice-1) {
   clicks += -minerPrice
   miners += 1
   mine()
   iterationVar2 += 1 
   minerPrice = Math.pow(1.8, iterationVar2) + 15;
   minerPrice = (Math.round(minerPrice));
   cookiesPerSecond += autoclickerChipsPerSecond;            
   }
   document.getEl
   document.getElementById("cookiesPerSecond").innerHTML 
   = cookiesPerSecond;
  document.getElementById("miner").innerHTML = miners;
  document.getElementById("chips").innerHTML = clicks;
  document.getElementById("addAnAutoclicker").innerHTML = minerPrice;
   }
   
  function cookieMachine(){
  if (clicks > machinePrice-1) {
   clicks += -machinePrice;
   cookieMachines += 1;
   iterationVar1 += 1 ;
   cookiesPerSecond += machineChipsPerSecond ;
   machinePrice = Math.pow(4.8, iterationVar1) + 100;

  machinePrice = (Math.round(machinePrice));
   cookieMine()
}
  document.getElementById("cookiesPerSecond").innerHTML = cookiesPerSecond;
  document.getElementById("machines").innerHTML = cookieMachines;
  document.getElementById("chips").innerHTML = clicks;
  document.getElementById("machinePrice").innerHTML = machinePrice ;
  }
  function airdrop() {

if (clicks > airdropPrice - 1 ) {
clicks += -airdropPrice
airdropPlanes += 1
iterationVar3 += 1
cookiesPerSecond += dropPlaneChipsPerSecond
airdropPrice = Math.pow(8.8, iterationVar3) + 2000;
airdropPrice = (Math.round(airdropPrice));
   cookieMine()
airdropBringer()
}
document.getElementById("cookiesPerSecond").innerHTML = cookiesPerSecond;
document.getElementById("chips").innerHTML = clicks;document.getElementById("airdropPlanes").innerHTML = airdropPlanes;
document.getElementById("airdropPrice").innerHTML = airdropPrice;
  }

function airdropBringer() {

 airdropper = setInterval(addClick, airdropPlaneDropSpeed);
}

function cookieMine(){
 minerMachine = setInterval(addClick, minerMachineSpeed);
  }
  
function mine() {
 myVar = setInterval(addClick, clickerSpeed);
}

function popupTrigger() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  window.setTimeout(hidePopup,300);
}

function hidePopup(){
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function sugarCookie () {
if (clicks >= 5000) {
clicks += -5000  
clicksPerCookie += .5
document.getElementById("clicksPerCookie").innerHTML = clicksPerCookie;
document.getElementById("chips").innerHTML = clicks;
machineChipsPerSecond = machineChipsPerSecond * 1.5
autoclickerChipsPerSecond = autoclickerChipsPerSecond * 1.5
dropPlaneChipsPerSecond = dropPlaneChipsPerSecond * 1.5
document.getElementById("theCookie").src="sugarcookie.png";
document.getElementById("cookieUpgradeButton").style.display = 'none';

}
}

function fasterAutoclickers() {
if (clicks > 1000) {
clicks += -1000;
clickerSpeed = 1500;
document.getElementById("fasterAutoclickersID").style.display = 'none';
document.getElementById("chips").innerHTML = clicks;
autoclickerChipsPerSecond = autoclickerChipsPerSecond * 1.25;
}
}

function betterMachines() {

if (clicks > 3000 ){
clicks += -3000
minerMachineSpeed += -50;
machineChipsPerSecond = machineChipsPerSecond * 1.25;
document.getElementById("chips").innerHTML = clicks;
document.getElementById("betterMachines").style.display = 'none';

}


}

function jetPlaneUpgrade() {

if (clicks > 2000)
{
 clicks += -2000
airdropPlaneDropSpeed += -10;
dropPlaneChipsPerSecond = dropPlaneChipsPerSecond * 1.25
document.getElementById("chips").innerHTML = clicks;
document.getElementById("dropPlaneUpgrade").style.display = 'none';
}


}

function cheatCodeCheck(event) {

var cheatCode = $("#cheatCodes").val();

if (cheatCode == "HD" ){
clicks += 1000
document.getElementById("chips").innerHTML = clicks;
}

else {


}


}
 
$("#cheatForm").on("submit", cheatCodeCheck);