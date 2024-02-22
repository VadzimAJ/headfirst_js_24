window.onload = init;

function init() {
  var map = document.getElementById('map');
  timeHandler();
}

function showCoords (eventObj) {
  var map = document.getElementById('coords');
  var x = eventObj
  map.innerHTML = "Map coordinates: " + x + ", " + y;

}

function timeHandler () {
  alert ("Hey!");
  timer();
}

function timer (){
  setTimeout(timeHandler, 5000);
}