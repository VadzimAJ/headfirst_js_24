function makeCars () {
  var makes = ["Webville Motors", "GM", "Fiat", "Chevy", "Turker"];
  var models = ["Taxi", "Caddilac", "500", "Bel Air", "Torpedo"];
  var years = [ 1955, 1960, 1948, 1957, 1954];
  var colors = ["red", "yellow", "white", "sky-blue", "black"];
  var convertables = [true, false];

  var rand1 = Math.floor(Math.random() * makes.length);
  var rand2 = Math.floor(Math.random() * models.length);
  var rand3 = Math.floor(Math.random() * years.length);
  var rand4 = Math.floor(Math.random() * colors.length);
  var rand5 = Math.floor(Math.random() * 5) + 1;
  var rand6 = Math.floor(Math.random() * 2);

  var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passagers: rand5,
    convertable: convertables[rand6],
    mileage: 0
  };

  return car;
}

function displayCar (car) {
  console.log ("You new car is a " + car.year + " " + car.make + " " + car.color + " " + car.model);
}

var carToSell = makeCars();

displayCar(carToSell);