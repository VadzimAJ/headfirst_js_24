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
    { locations: ['0', '0', '0'], hits: ['', '', ''] },
    { locations: ['0', '0', '0'], hits: ['', '', ''] },
    { locations: ['0', '0', '0'], hits: ['', '', ''] }
    ],

  fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0 && ship.hits[index] !== 'hit') {
              ship.hits[index] = 'hit';
              view.displayHit(guess);
              view.displayMessage("Hit!");
              if (this.isShunk(ship)){
                view.displayMessage("You sank my battleship!");
                this.shipsSunk++;
                console.log("Sinked ships is " + this.shipsSunk);
              }
              return true;
            } else if ( ship.hits[index] === 'hit'){
              console.log("You've already shot at this place before!");
              view.displayMessage("You've already shot at this place before!");
              return false;
            }
        }
          view.displayMiss(guess);
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
  },
  generateShip: function() {
    var direction = Math.floor(Math.random() * 2);
    var row, col;

    if (direction === 1) {
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength));

    }else {
      row = Math.floor(Math.random() *  (this.boardSize - this.shipLength));
      col = Math.floor(Math.random() * this.boardSize);
    }

    var newShipLocations = [];
    for (var i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(row + "" + (col + i));
      } else {
        newShipLocations.push((row + i) + "" + col);
      }
    }
    return newShipLocations;
  },
  generateShipLocations: function () {
    var locations;
    for (var i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision (locations));
      this.ships[i].locations = locations;
    }
  },
  collision: function (locations) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = model.ships[i];
      for (var j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j])>= 0 ) {
          return true;
        }
      }
    }
    return false;
  }
}


var controller = {
  guesses: 0,

  processGuess: function (guess) {
    var location = parseGuess(guess);
    if (location) {
      this.guesses++;
        console.log("Number of shoot " + this.guesses);
      var hit = model.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage ("You sank all my battleships, in " + this.guesses + " guesses");
      }
    }
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

function init() {
  var fireButton = document.getElementById('fire-button');
  fireButton.onclick = hanblerFireButton;

  var guessInput = document.getElementById("guess-input");
  guessInput.onkeydown = hanleKeyPress;

  model.generateShipLocations();
}

function hanleKeyPress (e) {
  var fireButton = document.getElementById('fire-button');
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

function hanblerFireButton() {
  var guessInput = document.getElementById("guess-input");
  var guess = guessInput.value;
  controller.processGuess(guess);
  guessInput.value = "";
}

window.onload = init;