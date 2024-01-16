var taxi = {
  make: "Webville Motors",
  model: "Taxi",
  yar: 1955,
  color: "yellow",
  passagers: 4,
  convertable: false,
  mileage: 291341
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