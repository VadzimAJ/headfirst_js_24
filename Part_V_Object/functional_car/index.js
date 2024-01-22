var fiat = {
  make: "Fiat",
  model: 500,
  year: 1949,
  color: "Red",
  passagers: 2,
  convertable: false,
  milage: 1000,
  started: false,
  fuel: 0,

  start: function () {
    if (this.fuel == 0) {
      alert ("Not starting? maby fuel is out?")
    } else {
    this.started = true;
    }
  },

  stop: function () {
      this.started = false;
  },

  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {
        alert("Zoom Zoom!");
        this.fuel = this.fuel - 1;
      }else {
        alert("Oh... out of fuel!");
      }
      
    } else {
      alert("You need to start engine first!");
    }
  },

  addFuel: function (amount) {
    this.fuel = this.fuel + amount;
  }
}

for (var prop in fiat) {
  console.log( prop + ": " + fiat[prop]);
}