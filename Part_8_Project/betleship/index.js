class View {
  displayMassage = (msq) => {
  let messageArea = document.getElementById("messageArea");
  messageArea.innerHTML = msq;
  }

  displayHit = (location) => {
    let cell = document.getElementById(location);
    cell.setAttribute('class', 'hit');
  }

  displayMiss = (location) => {
    let cell = document.getElementById(location);
    cell.setAttribute('class', 'miss')
  }
}

class GameModel {
  constructor(boardSize, numberOfShips, shipLength) {
    this.boardSize = boardSize;
    this.numberOfShips = numberOfShips;
    this.shipLength = shipLength;
    this.ships = [];
  }


  generateBoard = () => {
    const table = document.createElement('table');
    table.className = 'table';

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    for (var i = 0; i < this.boardSize; i++) {
      let tr = document.createElement('tr');
      let trId = i;
      tr.id = trId;

      for (var j = 0; j < this.boardSize; j++) {
        let td = document.createElement('td');
        let tdId = i.toString() + j.toString();
        td.id = tdId;
        td.className = 'td';
        tr.appendChild(td);
      }

      tbody.appendChild(tr);
    }

    const boardContainer = document.querySelector('.board-container')
    boardContainer.appendChild(table);
  }

  maxShipLength = () => {
    if (this.shipLength >= this.boardSize - 4 && this.shipLength <= 4) {
      console.log("Max Ship Length is normal:", this.shipLength);
      return true;
    } else {
      console.log(this.shipLength, "shps heve is to match length");
      return false;
    }
  }

  generateShipsArr = () => {
    let arrShipLength = [];

    console.log("before creating ships arr is ", this.ships);
    console.log("before creating arrShipLength arr is", arrShipLength);

    for (let i = 0; i < this.shipLength; i++) {
      arrShipLength.push(null);
    }

    for (let i = 0; i < this.numberOfShips; i++) {
      this.ships.push({ locations: arrShipLength, hits: arrShipLength });
    }

    console.log("after creating ships arr is ", this.ships);
    console.log("after creating arrShipLength arr is", arrShipLength);
  }

  generateShipsLocation = () => {
    let locations;
    var ships = this.generateShipsArr();
    console.log(this.ships);
    for (let i = 0; i < this.numberOfShips; i++) {
      do {
        locations = this.generateShips();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
      console.log(ships);
    }
  }

  generateShips = () => {
    let direction = (Math.floor(Math.random() * 2));
    let row, col;

    if (direction === 1) {
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
    } else {
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
      col = Math.floor(Math.random() * this.boardSize);
    }

    let newShipLocations = [];

    for (let i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(row + "" + (col + i));
      } else {
        newShipLocations.push((row + i) + "" + col);
      }

    }
    console.log("newShipsLocations is", newShipLocations);
    return newShipLocations;
  }



  collision = (locations) => {
    for (let i = 0; i < this.numberOfShips; i++) {
      let ship = this.ships[i];
      for (let j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j + 1]) >= 0) {
            return true;
          }
        }
    }
    console.log("array intersection, return false")
    return false;
  }

  fire = (guess) => {
    for (let i = 0; i < this.numberOfShips; i++) {
      let ship = this.ships[i];
      let index = ship.location.indexOf(guess);
      if (index >= 0) {
        ship.hits = 'hit';
        view.displayHit(guess);
        view.displayMassage("Hit!");
        if (this.isShunk(ship)) {
          view.displayMassage("You shunk a ship!");
          this.shipShunk++;
          console.log("Sinked ships is " + this.shipsSunk);
        }
        return true;
      }
    }
  }

  isShunk = (ship) => {
    for (let i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== 'hit') {
        return false;
      }
    }
    return true;
  }

}

class Controller {
  constructor() {
    this.guesses = 0;
  }

  processGuess =(guess) => {
    let location = parseGuess(guess);
    if (location) {
      this.guesses++;
        console.log("Number of shoot " + guesses);
      let hit = GameModel.fire(location);
      if (hit && GameModel.shipsSunk === GameModel.numShips) {
        view.displayMessage ("You sank all my battleships, in " + guesses + " guesses");
      }
    }
  }
}

parseGuess = (guess) => {
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  if (guess === null || guess.length !== 2) {
    alert ("Data is fail!")
  } else {
    firstChar = guess.charAt(0).toUpperCase();
    let row = alphabet.indexOf(firstChar);
    let column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert ("That isn`t on the board.")
    } else if (row < 0 || row >= GameModel.boardSize || 
                column < 0 || column >= GameModel.boardSize) {
                  alert(" That off the board!");
      } else {
        return row + column;
      }
  }
  return null;
}


handleKeyPress = (e) => {
  var fireButton = document.getElementById('fire-button');
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}
hanblerFireButton = () => {
  var guessInput = document.getElementById("guess-input");
  var guess = guessInput.value;
  controller.processGuess(guess);
  guessInput.value = "";
}


async function init() {
  try {
    var newGame = new GameModel(7, 3, 3);
    await newGame.generateBoard();
    console.log ("BOARD IS GENERETED");

    await newGame.generateShipsLocation();
    console.log ("START SHIP LOCATIONS IS GENERETED");

    await newGame.generateShips();
    console.log ("ALL SHIP ARE GENERETED");

  } catch (error) {
    console.error('Error fetching data:', error);
  }
  
  

  var fireButton = document.getElementById('fire-button');
  fireButton.onclick = hanblerFireButton;

  var guessInput = document.getElementById("guess-input");
  guessInput.onkeydown = handleKeyPress;

  

  console.log("Board:", JSON.stringify(newGame, null, 2));
  console.log("Board Size:", newGame.boardSize);
  console.log("Number of Ships:", newGame.numberOfShips);

  console.log("Ship Length is:", newGame.maxShipLength());

}

window.onload = init;

console.log(init());

