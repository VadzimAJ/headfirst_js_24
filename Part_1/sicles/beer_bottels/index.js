var bottels = " bottel";
var beerSong = " of beer";
var wallSong = " on the wall";
var takeDown = "Take one down, pass it around,";
var count = 99;

while (count > 1) {
  console.log ( count + bottels + "s" + beerSong + wallSong);
  console.log ( count + bottels + "s" + beerSong + ",");
  console.log ( takeDown);
  count = count - 1;
}
if (count = 1) {
  console.log ( count + bottels + "e" + beerSong + wallSong);
  console.log ( count + bottels + "e" + beerSong + ",");
  console.log ( takeDown);
  console.log ( "No more" + bottels + "e" + beerSong + wallSong + ".");
}