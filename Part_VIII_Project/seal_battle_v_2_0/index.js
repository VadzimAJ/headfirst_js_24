var view = {
  displayMessage: function (msq) {
    var messageArea = document.getElementById("massageArea");
    messageArea.innerHTML = msq;
  },
  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
}



// var ship2 = ships[Math.ceil((ships.length / 2) - 1)];
// var locations = ship2.locations;

// console.log("Locations is " + locations[Math.floor(ships.length / 2)]);

var model = {
  boardSize: 7,
  numShips: 3,
  shipsSunk: 0,
  shipLength: 3,

  ships: [
    { locations: ['06', '16', '26'], hits: ['', '', ''] },
    { locations: ['24', '34', '44'], hits: ['', '', ''] },
    { locations: ['10', '11', '12'], hits: ['', '', ''] }
    ],

  fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
              ship.hits[index] = 'hit';
              view.displayHit(guess);
              view.displayMessage("Hit!");
              if (this.isShunk(ship)){
                view.displayMessage("You sank my battleship!");
                this.shipsSunk++;
              }
              return true;
            }
        }
          view.displayHit(guess);
          view.displayMessage("You missed!");
          return false;
      },

  isShunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++){
          if (ship.hits[i] !== 'hit'){
            return false;
          }
        }
        return true;
  }
}


var controller = {
  guesses: 0,

  processGuess: function (guess) {

  }
}

function parseGuess (guess) {
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  if (guess === null || guess.length !== 2) {
    alert ("Data is fail!")
  } else {
    firstChar = guess.charAt(0).toUpperCase();
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert ("That isn`t on the board.")
    } else if (row < 0 || row >= model.boardSize || 
                column < 0 || column >= model.boardSize) {
                  alert(" That off the board!");
      } else {
        return row + column;
      }
  }
  return null;
}