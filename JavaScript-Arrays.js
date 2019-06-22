var cars = ["Ferrari", "Lamborghini", "Porsche"];
cars;

var games = [[10, "Fifa", "Gran Turismo"], true, ["Ball", "Chess"]];
games;

//Accessing Elements
for (var i = 0; i < games.length; i++) {
  console.log(games[i])
}

//length
console.log(cars.length);

//concat
console.log(cars.concat(games))

//pop
console.log(cars.pop());

//push
cars.push("Nissan", "Mazda");
console.log(cars);

//reverse
cars.reverse();
console.log(cars);