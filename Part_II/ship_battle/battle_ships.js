var field = 7;
var shipLenght = 3;
var randomLocation = Math.ceil(Math.random()*(field-shipLenght-1));
var location1 = randomLocation;
var location2 = location1 + 1;
var location3 = location1 + 2;

console.log (randomLocation);

var userQuery;
var guess = 0;
var hits = 0;
var isSink = false;

while (isSink == false) {
  userQuery = prompt("Fire into enemy ship! write a number from 1 to " + field);
  console.log("isSink = " + isSink);
    if ( userQuery < 1 || userQuery > field){
      alert (" Please put a valid number");
    } else {
      guess = guess + 1;
      if ( userQuery == location1 || userQuery == location2 || userQuery == location3) {
        hits = hits + 1;
        alert ("HIT! You hit " + hits + " of " + shipLenght + " Its a " + guess + " of you shoot.");
        
        if ( hits == shipLenght){
          isSink = true;
          alert ( "WIN! You make " + guess + " shoots form enamy ship");
          
        }
      } else {
        alert ("MISS! You hit " + hits + " of " + shipLenght + " Its a " + guess + " of you shoot.");
      }
    }
    
}

var stats = "You took " + guess + " guesses to sink the battleship, " +
            "which means your shooting accuracy was " + (shipLenght/guess);
            console.log("isSink = " + isSink);
alert(stats);