const Student = require('../model/student');

let controller = {
    getStudents: function (req, res, next) {
        res.status(200).json(Student.getAll());
    },
    getStudentById: function (req, res, next) {
        let id = parseInt(req.params.id);
        let student = Student.getById(id);
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: "Student not found" });
        }
    },
    createStudent: function (req, res, next) {
        let { id, name, program } = req.body;
        if (id && name && program) {
            let newStudent = new Student(parseInt(id), name, program);
            newStudent.create();
            res.status(201).json(newStudent);
        } else {
            res.status(400).json({ message: "Provide all data." });
        }
    },
    deleteStudent: function (req, res, next) {
        let id = parseInt(req.params.id);
        let deletedStudent = Student.remodeById(id);
        if (deletedStudent) {
            res.status(200).json(deletedStudent);
        } else {
            res.status(404).json({ message: "Student not found" });
        }
    },
    updateStudent: function (req, res, next) {
        let id = parseInt(req.params.id);
        let { name, program } = req.body;
        if (id && name && program) {
            console.log("updateStudent Data received");
            let std = Student.update(id, name, program);
            if (std) {
                console.log("updatedStudent: " + std);
                res.status(202).json(std);
            } else {
                res.status(404).json({ message: "Student not found" });
            }
        } else {
            res.status(400).json({ message: "Provide all data" });
        }
    },
    filterByProgram: function (req, res, next) {
        // let program = req.params.program;
        console.log(req.query);
        let program = req.query.program;
        let result = Student.filterByProgram(program);
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Not found" });
        }
    }
};

module.exports = controller;