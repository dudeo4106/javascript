var Hoisting

function Hoisting() {
    console.log(1);
}

Hoisting()

Hoisting = function () {
    console.log(2);
}

Hoisting()
