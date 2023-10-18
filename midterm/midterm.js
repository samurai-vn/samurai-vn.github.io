/** Print the odd number */
// const numbers = [1, 5, 8, 2, 77, 108];
// numbers.filter(e=>e%2 != 0).forEach(e=>console.log(e));

/** create sum function which accept array as input param and retun sum all elements which greater than 20, not use loop funtionalities */
// const numbers = [1, 5, 8, 2, 77, 108];
// function sum(arr) {
//     return arr.filter(e=>e>20).reduce((e1, e2)=>e1+e2, 0);
// }
// console.log(sum(numbers));

/** Create a function using function expression name getNewArray accept a array of String as input parameter return
 * a new array which contains all string, length greater than and equal to 5, and contains letter 'a'. Not using any loop functionalities
 */

// let getNewArray = function(arr) {
//     return arr.filter(e=>e.length > 5 && e.includes("a"));
// }
// console.log(getNewArray(["Hello", "How are you", "I'm Dung", "Thank you", "And you?"]));

/** create a regular expression that match mm/dd/yyy */
// let datteFormat = "^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(/d/d/d/d)$"
// let datteFormat2 = "^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/([0-9]){4}$"

/** create a regular expression that match http:// or https:// */
// let httpFormat = "^(http:\/\/)(s){0,1}$"

/** create a regular expression for format HH:MM:SS 12 hour format */
// let timeFormat = "^(0[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9])$"

/** create a regular expression for html tag */
// let htmlTagFormat = "^(<[\w][\s]?)(\d*\D*\s*\S*\w*\W*)(<\/[\w]>)$"

/** Create a regular expression for file name with 3 charactors extensions */
// let fileNameFormat = "^([\w\S]+)\.([a-zA-Z0-9]{3})$"

/** create a regular expression for file path */
// let pathFormat = "^(([\w\S]*)\/)*$"

/** create a regluar expression for file path include file name with 3 charactor extensions */
// let filePathFormat = "^(([\S\w]*)\/)*[\S\w]*\.[\S\w]{3}$"

/** create a regular expression for email */
let emailFormat = "^[a-zA-Z0-9_\-]+@([a-zA-Z0-9_\-]+\.)+[a-z-A-Z]{2,4}$"

/**
 * For the given students array below, compute the average grade of all students who took cs303 course
which returns an object which key is students' names, value is the average.
Expected result:
{
Quincy: 93.5,
Sam: 86.5,
Katie: 71.5
}
You're not allowed to use for, while, do...while, for..of, for..in, forEach method
 */
// const students = [
//     { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
//     { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
//     { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
//     { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
//     { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
// ];

// let result = students.filter(st=>st.courses.includes("cs303")).reduce((acc, cur)=>{
//     let avg = cur.grades.reduce((sum, e)=>sum+e, 0) / cur.grades.length;
//     acc[cur.name] = avg;
//     return acc;
// },{})

// let result = students.filter(e=>e.courses.includes("cs303")).reduce((acc, cur) => {
//     let avg = cur.grades.reduce((sum, e) => sum + e , 0) / cur.grades.length;
//     acc[cur.name] = avg;
//     return acc;
// }, {})
// console.log(result);

/**
 * Please work on a project that involves creating various types of vehicles.
Create a Vehicle constructor function that has the following properties and methods:
Properties:
make - the make of the vehicle
model - the model of the vehicle
year - the year the vehicle was made
mileage - the number of miles the vehicle has been driven
Methods:
drive(distance) - a method that takes a distance (in miles) as an argument and increases the vehicle's
mileage by that distance
toString() - a method that returns a string representation of the vehicle, in the format "YEAR MAKE
MODEL (MILEAGE miles)"
Create a Car constructor function that extends the Vehicle constructor function, with the following
additional properties and methods:
Properties:
numDoors (number) - the number of doors on the car
speed (number) - the current speed of the car, in mph
topSpeed (number) - the top speed of the car, in mph
Methods:
accelerate() - a method that increases the car's speed by 10 mph
brake() - a method that decreases the car's speed by 10 mph
toString() - a method that overrides the parent toString() method, and returns a string representation
of the sports car in the format "YEAR MAKE MODEL (MILEAGE miles), NUMDOORS doors, TOPSPEED mph"
 */

// function Vehicle(make, model, year, mileage) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.mileage = mileage;
// }

// Vehicle.prototype.drive = function(distance){
//     this.mileage += distance;
// }

// Vehicle.prototype.toString = function() {
//     return `${this.year} ${this.make} ${this.model} (${this.mileage} miles)`;
// }

// v1 = new Vehicle("Mazda", "CX9", "2013", 144382);
// console.log(v1.toString());

// function Car(make, model, year, mileage, numDoors, speed, topSpeed) {
//     Vehicle.call(this, make, model, year, mileage);
//     this.numDoors = numDoors;
//     this.speed = speed;
//     this.topSpeed = topSpeed;
// }
// Car.prototype.accelerate = function() {
//     this.speed += 10;
// }
// Car.prototype.brake = function() {
//     this.speed -= 10;
// }
// Car.prototype.toString = function() {
//     return `${this.year} ${this.make} ${this.model} (${this.mileage} miles) ${this.numDoors} doors ${this.topSpeed} mph`
// }
// Object.setPrototypeOf(Car, Vehicle);
// Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

// car1 = new Car("Mazda", "CX9", "2013", 144382, 5, 80, 150);
// console.log(car1);
// console.dir(Car);
// console.log(car1.toString());

// let animal = {
//     sleep:function() {
//         this.sleeping = true;
//     },
//     walk:function() {
//         if(!this.sleeping) {
//             console.log("animal walking");
//         } else {
//             console.log("animal sleeping");
//         }
//     }
// };

// let rabbit = {
//     jump:true,
//     sleep:function() {
//         console.log("Sleeping!");
//     }
// };
// rabbit = Object.create(animal);
// rabbit.eat=true;
// console.dir(rabbit);

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         this.students.forEach(function (student) {
//             console.log(this.title + ": " + student);
//         });
//     }
// };
// group.showList();


// let arr = ["I", "am", "Pham", "Xuan", "Dung"];
// console.log(arr);
// arr.splice(1, 2, "HAHA", "HUHU");
// console.log(arr);
// arr.splice(1, 2, "am", "Pham");
// console.log(arr);


// const numbers = [1, 5, 18, 2, 77, 108];
// console.log(numbers);
// numbers.filter(e=>e%2==0).forEach(e=>console.log(e));
// let fistEvenNum = numbers.find(e=>e%2==0);
// console.log(fistEvenNum);
// let posOfFirstEvenNum = numbers.findIndex(e=>e%2==0);
// console.log(posOfFirstEvenNum);

// console.log(numbers.map(e=>e+2));

let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};
// user.sayHi();
// user.sayHi.apply(user);
// user.sayHi.bind(user)();
// user.sayHi.call(user);
// console.dir(Function);
setInterval(user.sayHi(), 100);
// setTimeout(user.sayHi.bind(user), 2000);
// setTimeout(()=>user.sayHi.call(user), 2000);
// setTimeout(()=>user.sayHi.apply(user), 2000);


// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log(`${this.name}: Hello`);
//     }
// }
// console.dir(Person);
// class Employee extends Person {
//     constructor(name, salary) {
//         super(name);
//         this.salary = salary;
//     }
//     receiveBonus(amount) {
//         this.salary += amount;
//     }
// }

// console.dir(Employee);

