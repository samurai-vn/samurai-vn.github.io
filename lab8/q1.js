var student = {
    firstName: "",
    lastName: "",
    grades: [],
    inputnewGrade: function (grade) {
        this.grades[this.grades.length] = grade;
    },
    computeAverageGrade: function () {
        let sum = 0;
        this.grades.forEach(grade => {
            sum += grade;
        });
        return sum / this.grades.length;
    }
}


function createArrStudent(n) {
    let arrStudent = [];
    for (let i = 0; i < n; i++) {
        let st = Object.create(student);
        st.firstName = "firstName" + i;
        st.firstName = "lastName" + i;
        st.grades=[];
        st.inputnewGrade(Math.floor(Math.random() * 100));
        st.inputnewGrade(Math.floor(Math.random() * 100));
        st.inputnewGrade(Math.floor(Math.random() * 100));
        arrStudent[i] = st;
        // console.log(arrStudent[i].grades)
    }
    return arrStudent;
}

function computeAverageStudentGrade(arr) {
    let sum = 0;
    arr.forEach(student=>{
        sum += student.computeAverageGrade();
    })
    return sum/arrStudent.length;
}

/** Testing */

let arrStudent = createArrStudent(10);
let avgGrade = computeAverageStudentGrade(arrStudent);
console.log(avgGrade);