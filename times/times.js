var x = document.getElementById("frm1");
var text = "";
var i;
var hh = document.getElementById("ask");
var m1 = Math.floor((Math.random() * 10) + 1);
var m2 = Math.floor((Math.random() * 10) + 1);
var all;
var m1string = "5";

function newFact10(){
  m1 = Math.floor((Math.random() * 10) + 1);
  m2 = Math.floor((Math.random() * 10) + 1);
  console.log(m1);
  console.log(m2);
  var m1string = toString(m1);
  console.log(m1string)
  all = m1string.concat(" &times;".concat(m2));
  console.log(all);
  hh.innerHTML = all;
}

function newFact12(){

}

function clicked10(){
  newFact10();
}