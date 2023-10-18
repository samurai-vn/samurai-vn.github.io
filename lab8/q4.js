function Animal(name, speed) {
    this.name = name;
    this.speed = speed;
}

Animal.prototype.run = function(speed) {
    this.speed += speed;
}

Animal.compareBySpeed = function (a1, a2) {
    return a1.speed > a2.speed ? 1 : (a1.speed == a2.speed ? 0 : -1);
}

function Rabbit(name, speed) {
    Animal.call(this, name, speed);
}

Rabbit.prototype.hide = function() {
    console.log(this.name + " hides");
}

Object.setPrototypeOf(Rabbit, Animal);
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);


/** Testing  */

let r1 = new Rabbit("rabbit1", 13);
let r2 = new Rabbit("Rabbit2", 10);
let r3 = new Rabbit("Rabbit3", 11);
r1.run(4);
r2.run(-5);
r3.run(-1);
let arr = [r1, r2, r3];

console.log(arr);
arr.sort(Rabbit.compareBySpeed);
