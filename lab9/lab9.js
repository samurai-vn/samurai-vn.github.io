// //let person = class{} //class expression
// class Employee { //class declaration
//     // salary; //no need to declare public attribute
//     #fullName;
//     static #counter = 0;
//     constructor(name, salary) {
//         this.#fullName = name;
//         this.salary = salary;
//         Employee.#incCounter();
//         this.sayHi = function() { //instance in current obj
//             console.log("Emp");
//             // Employee.prototype.sayHi();
//         }
//     }
//     sayHi() {//instance method in Employee.prototype
//         console.log("Employee.prototype");
//     }
//     static sayHi() { //static method in Employee
//         console.log("Employee");
//     }
//     calSalary() { //instande method
//         return this.salary; //return instance value
//     }
//     static getCounter() { //static class method
//         return this.#counter;
//     }
//     static #incCounter() {
//         this.#counter++;
//     }
//     get name() {
//         return this.#fullName;
//     }
//     getName() {
//         return this.#fullName;
//     }
//     #setName(name) {
//         this.#fullName = name;
//     }
// } 

// let emp = new Employee("Anna Johns", 150000);
// console.dir(Employee);
// console.dir(emp);
// Employee.getCounter();
// emp.calSalary();
// console.dir(emp);
// console.log(emp.name);
// emp.name = "Smith";
// console.log(emp.name);
// console.log(typeof Employee);


// class Manager extends Employee {
//     constructor(name, salary, bonus) {
//         super(name, salary);
//         this.bonus = bonus;
//     }
//     getBonus() {
//         return this.bonus;
//     }
//     calSalary() {
//         return super.calSalary() + this.bonus;
//     }
// }

// let mng1 = new Manager("Smith Kerry", 170000, 25000);
// console.log(mng1.calSalary());
// console.log(mng1.getName());
// console.log(Employee.getCounter());

class Student {
    constructor(id) {
        this.answerArr = [];
        this.studentID = id;
    }

    addAnswer(question) {
        this.answerArr[this.answerArr.length] = question;
    }
    getstudentID() {
        return this.studentID;
    }
    getanswerArr() {
        return this.answerArr;
    }
}

class Question {
    constructor(id, answer) {
        this.questionID = id;
        this.answer = answer;
    }
    checkAnswer(answer) {
        if (this.questionID == answer.getquestionID() && this.answer == answer.getanswer()) {
            return 1;
        }
        return 0;
    }
    getquestionID() {
        return this.questionID;
    }
    getanswer() {
        return this.answer;
    }
}

class Quiz {
    constructor(students, questions) {
        this.students = students;
        this.questions = questions;

        this.answerMap = new Map();
        this.questions.forEach(q => {
            this.answerMap.set(q.getquestionID(), q.getanswer());
        })
    }
    scoreStudentBySid(sid) {
        let sum = 0;
        let st;
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].getstudentID() == sid) {
                st = this.students[i];
                break;
            }
        }
        let answerArr = st.getanswerArr();
        answerArr.forEach(a => {
            sum += a.checkAnswer(new Question(a.getquestionID(), this.answerMap.get(a.getquestionID())));
        })
        return sum;
    }

    getAverageScore() {
        let sumScores = 0;
        this.students.forEach(s => {
            sumScores += this.scoreStudentBySid(s.getstudentID());
        })
        return sumScores / this.students.length;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'))
student1.addAnswer(new Question(3, 'b'))
student1.addAnswer(new Question(1, 'b'))

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'))
student2.addAnswer(new Question(2, 'a'))
student2.addAnswer(new Question(1, 'd'))

const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new
    Question(3, 'b')];

const quiz = new Quiz(students, questions);
    let scoreforStudent10 = quiz.scoreStudentBySid(10);
    console.log(scoreforStudent10); //Expected Result: 3
    let scoreforStudent11 = quiz.scoreStudentBySid(11);
    console.log(scoreforStudent11); //Expected Result: 2
    let average = quiz.getAverageScore();
    console.log(average); //Expected Reuslt: 2.5
