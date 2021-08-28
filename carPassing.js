const carPassing = function (cars, speed) {
  // Your code in here ...
/*
The function, to check how often cars pass by, and track their speeds. 
param :array of car objects, and the speed of a car 
returns :array that includes all of the elements in cars as well as our new element.

*/
  cars.push( { "time" : Date.now() ,"speed" : speed } );
  return cars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
];
const speed = 38;
console.log(carPassing(cars, speed));


