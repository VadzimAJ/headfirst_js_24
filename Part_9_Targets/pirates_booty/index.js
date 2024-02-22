window.onload = init;

function init() {
  var map = document.getElementById('map');
  map.onmousemove = showCoords;
  // timeHandler();
}

function showCoords (eventObj) {
  var map = document.getElementById('coords');git log
  var x = eventObj.clientX;
  var y = eventObj.clientY;
  map.innerHTML = "Map coordinates: " + x + ", " + y;

}

// function timeHandler () {
//   alert ("Hey!");
//   timer();
// }

// function timer (){
//   setTimeout(timeHandler, 5000);
// }