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
    for (var i = 0; i < this.numberOfShips; i++) {
      let ship = this.ships[i];
      for (let j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j + 1]) >= 0) {
          if (ship.locations.indexOf(locations[j - 1]) >= 0) {
            return true;
          }
        }
      }
    }
    console.log("array intersection, return false")
    return false;
  }

}


function init() {
  var newGame = new GameModel(7, 3, 3);
  newGame.generateBoard();
  newGame.generateShipsLocation();
  newGame.generateShips();

  console.log("Board:", JSON.stringify(newGame, null, 2));
  console.log("Board Size:", newGame.boardSize);
  console.log("Number of Ships:", newGame.numberOfShips);

  console.log("Ship Length is:", newGame.maxShipLength());

}

window.onload = init;

