function Car() {}

Car.prototype.door = 4;
Car.prototype.handle = 2;

const carA  = new Car();
const carB = new Car();
console.log(carA.door);  // => 4
console.log(carA.handle);  // => 1
console.log(carB.door); // => 4
console.log(carB.handle); // => 1