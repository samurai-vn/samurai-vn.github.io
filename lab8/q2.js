function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.inputnewGrade = function(newGrade) {
    this.grades[this.grades.length] = newGrade;
}
Student.prototype.computeAverageGrade = function() {
    let sum = 0;
    this.grades.forEach(
        grade=>{
            sum += grade;
        }
    )
    return sum/this.grades.length;
}

function computeAverageStudentGrade(arr) {
    let sum = 0;
    arr.forEach(student=>{
        sum += student.computeAverageGrade();
    })
    return sum/arr.length;
}

/** Testing */
function createStudents(n) {
    let arrStudent = [];
    for(let i = 0; i < n; i++) {
        st = new Student("Fistname" + i, "LastName" + i);
        st.inputnewGrade(Math.floor(Math.random() * 100));
        st.inputnewGrade(Math.floor(Math.random() * 100));
        st.inputnewGrade(Math.floor(Math.random() * 100));
        st.inputnewGrade(Math.floor(Math.random() * 100));
        arrStudent[i] = st;
    }
    
    return arrStudent;
}

/** Testing */

let students = createStudents(10);
console.dir(students);
let avgGrade = computeAverageStudentGrade(students);
console.log(avgGrade);