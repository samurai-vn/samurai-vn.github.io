const students = [
    { id: 644518, name: "Anna John", program: "Compro" },
    { id: 644519, name: "Tom Jerry", program: "Compro" },
    { id: 644520, name: "Tom Cruiz", program: "Art" },
    { id: 644521, name: "Jenifer Lopez", program: "Art" },
    { id: 644523, name: "Kerry Jerry", program: "Compro" },
    { id: 644524, name: "Hung Tran", program: "Compro" },
    { id: 644525, name: "Dung Pham", program: "Compro" }
];

class Student {
    constructor(id, name, program) {
        this.id = id;
        this.name = name;
        this.program = program;
    }

    create() {
        students.push(this);
    }
    static getById(id) {
        return students.find(s => s.id === id);
    }

    static getAll() {
        return students;
    }

    static remodeById(id) {
        let index = students.findIndex(s => s.id === id);
        let deletedStudent;
        if (index > -1) {
            deletedStudent = students[index];
            students.splice(index, 1);
        }
        return deletedStudent;
    }

    static update(id, name, program) {
        let index = students.findIndex(s => s.id === id);
        console.log(index);
        let student;
        if(index > -1) {
            student = students[index];
            student.id = id;
            student.name = name;
            student.program = program;
            students.splice(index, 1, student);
        }
        console.log(student);
        return student;
    }

    static filterByProgram(program) {
        return students.filter(s => s.program === program);
    }
}

module.exports = Student;