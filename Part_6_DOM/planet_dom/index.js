function init () {
  var planet = document.getElementById("green");
  planet.innerHTML = "Red Alert!";
  planet.setAttribute ("class" , "redtext");
}

window.onload = init;