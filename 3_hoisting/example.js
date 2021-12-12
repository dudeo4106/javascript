console.log(num); // ---> undefined

num = 1;
var num;

console.log(num) // ---> 1

console.log('-------------');

Hoisting();

var Hoisting;

function Hoisting() {
    console.log(1);
}

Hoisting();

Hoisting = function () {
    console.log(2);
}

Hoisting();
