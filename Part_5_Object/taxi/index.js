var taxi = {
  make: "Webville Motors",
  model: "Taxi",
  yar: 1955,
  color: "yellow",
  passagers: 4,
  convertable: false,
  mileage: 291341
};

var cadi = {
  make: "GM",
  model: "Caddilac",
  yar: 1955,
  color: "yellow",
  passagers: 4,
  convertable: false,
  mileage: 12829
};

var fiat = {
  make: "Fiat",
  model: "500",
  yar: 1955,
  color: "yellow",
  passagers: 4,
  convertable: false,
  mileage: 88000
};

var chevy = {
  make: "Chevy",
  model: "Bel Air",
  yar: 1957,
  color: "yellow",
  passagers: 4,
  convertable: false,
  mileage: 1021
};

function prequal(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }

  return true;
}

var worthLook = prequal (taxi);

if (worthLook) {
  console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
  console.log ( "You shold really pass on the " + taxi.make + " " + taxi.model);
}


var worthLook = prequal (cadi);

if (worthLook) {
  console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
  console.log ( "You shold really pass on the " + taxi.make + " " + taxi.model);
}


var worthLook = prequal (fiat);

if (worthLook) {
  console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
  console.log ( "You shold really pass on the " + taxi.make + " " + taxi.model);
}


var worthLook = prequal (chevy);

if (worthLook) {
  console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
  console.log ( "You shold really pass on the " + taxi.make + " " + taxi.model);
}