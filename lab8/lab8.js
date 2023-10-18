// function user(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let auser = new user("Jack");
// console.log(auser);
// console.dir(user);

// let animal = {
//     eats:true,
//     walk:function() {
//         alert("Animal wald")
//     }
// }
// console.dir(animal.walk);

// function Person(l, n) {
//     this.lastName = l;
//     this.firstName = n;
// }

// Person.prototype.display = function() {
//     console.log(this.firstName, this.lastName);
// }

// function Employee(l, n, salary) {
//     Person.call(this, l, n);
//     this.salary = salary;
// }
// Object.setPrototypeOf(Employee, Person);
// Object.setPrototypeOf(Employee.prototype, Person.prototype);
// // Employee.prototype = Person.prototype;
// Employee.prototype.displaySalary = function() {
//     console.log(this.lastName, this.firstName, this.salary);
// }

// p1 = new Person("Harry", "Potter");
// p1.display();
// e1 = new Employee("Severus", "Snape", 1000);
// e1.display();
// e1.displaySalary();



/** Question 1: Create object using object literal */
// var student = {
//     firstName: "",
//     lastName: "",
//     grades: [],
//     inputnewGrade: function (grade) {
//         this.grades[this.grades.length] = grade;
//     },
//     computeAverageGrade: function () {
//         let sum = 0;
//         this.grades.forEach(grade => {
//             sum += grade;
//         });
//         return sum / this.grades.length;
//     }
// }


// function createArrStudent(n) {
//     const arrStudent = [];
//     for (let i = 0; i < n; i++) {
//         let st = Object.create(student);
//         st.firstName = "firstName" + i;
//         st.firstName = "lastName" + i;
//         st.grades=[];
//         st.inputnewGrade(Math.floor(Math.random() * 100));
//         st.inputnewGrade(Math.floor(Math.random() * 100));
//         st.inputnewGrade(Math.floor(Math.random() * 100));
//         arrStudent[i] = st;
//         console.log(arrStudent[i].grades)
//     }
//     return arrStudent;
// }

// function computeAverageStudentGrade(arr) {
//     let sum = 0;
//     arr.forEach(student=>{
//         sum += student.computeAverageGrade();
//     })
//     return sum/arrStudent.length;
// }

// let arrStudent = createArrStudent(10);
// let avgGrade = computeAverageStudentGrade(arrStudent);
// console.log(avgGrade);

// /** Question 2 create object using Constructor functio */

// function Student(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.grades = [];
// }

// Student.prototype.inputnewGrade = function(newGrade) {
//     this.grades[this.grades.length] = newGrade;
// }
// Student.prototype.computeAverageGrade = function() {
//     let sum = 0;
//     this.grades.forEach(
//         grade=>{
//             sum += grade;
//         }
//     )
//     return sum/this.grades.length;
// }
