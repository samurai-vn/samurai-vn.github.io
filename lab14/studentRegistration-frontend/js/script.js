const doc = document;
window.onload = display;

async function display() {
    let response = await fetch("http://localhost:5000/students");
    let json;
    if (response.ok) {
        json = await response.json();
        addOptionToDropdown();
        for (let e of json) {
            addRowToTable(e.id, e.name, e.program)
            addOptionStudentIdUpdate(e.id);
            addOptionStudentIdRemove(e.id);
        }
    }
    else alert("Error" + response.status);

}

function addRowToTable(id, name, program) {
    let row = doc.createElement('tr');
    row.setAttribute("id", id);
    for (let e of arguments) {
        let cell = doc.createElement('td');
        cell.appendChild(doc.createTextNode(e));
        row.appendChild(cell);
    }
    doc.getElementById('tbodyStudentList').appendChild(row);

}

async function addStudent(id, name, program) {
    let obj = { id, name, program };
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch("http://localhost:5000/students", setting);
    if (response.ok) {
        addRowToTable(id, name, program);
        addOptionStudentIdRemove(id);
        addOptionStudentIdUpdate(id);
    } else alert("Error " + response.status);

}


function addOptionToDropdown(){
    let option = doc.createElement('option');
    option.setAttribute("value", "");
    option.appendChild(doc.createTextNode("Select Student Id"));
    doc.getElementById('ddlStudentForUpdate').appendChild(option);
}
function addOptionStudentIdUpdate(id) {
    let option = doc.createElement('option');
    option.setAttribute("value", id);
    option.appendChild(doc.createTextNode(id));
    doc.getElementById('ddlStudentForUpdate').appendChild(option);
}

function addOptionStudentIdRemove(id) {
    let option = doc.createElement('option');
    option.setAttribute("value", id);
    option.appendChild(doc.createTextNode(id));
    doc.getElementById('ddlStudent').appendChild(option);
}
async function getStudentById(id) {
    let response = await fetch("http://localhost:5000/students/" + id);
    let json;
    if(response.ok) {
        json = await response.json();
        console.log(json);
        doc.getElementById('idForUpdate').value = json.id;
        doc.getElementById('nameForUpdate').value = json.name;
        doc.getElementById('programForUpdate').value = json.program;
    }
}

async function removeStudent(id) {
    let setting = {
        method: "DELETE"
    }
    let response = await fetch("http://localhost:5000/students/" + id, setting);
    if (response.ok) {
       doc.getElementById(id).remove();//remove the row from table
        alert("Deleted Successfully");
        removeOptionStudentId(id);
    } else alert("Error " + response.status);
}
function removeOptionStudentId(id) {
    let element = doc.getElementById('ddlStudent').querySelectorAll("option[value='" + id + "']")[0];;
    element.remove();
    element = doc.getElementById('ddlStudentForUpdate').querySelectorAll("option[value='" + id + "']")[0];;
    element.remove();
}
async function updateStudent(id, name, program) {
    let obj = { id, name, program };
    console.log(id, name, program);
    let setting = {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch("http://localhost:5000/students/" + id + '?name=' + name +'&program=' + program, setting);
    if (response.ok) {
        doc.getElementById(id).childNodes[1].innerHTML = name;
        doc.getElementById(id).childNodes[2].innerHTML = program;
        alert("Updated Successfully");
    } else alert("Error " + response.status);

}



//add event listener
doc.getElementById('btnRegister').addEventListener("click", () => {
    let id = doc.getElementById('id').value;
    let name = doc.getElementById('name').value;
    let program = doc.getElementById('program').value;
    addStudent(id, name, program);
    doc.getElementById('myform').reset()
});

doc.getElementById('ddlStudentForUpdate').addEventListener('click', () => {
    let id = doc.getElementById('ddlStudentForUpdate').value;
    if(id) {
        getStudentById(id);
    }
})
doc.getElementById('btnDelete').addEventListener("click", () => {
    let id = doc.getElementById('ddlStudent').value;
    removeStudent(id);
});

doc.getElementById('btnUpdate').addEventListener('click', () =>{
    let id = doc.getElementById('idForUpdate').value;
    let name = doc.getElementById('nameForUpdate').value;
    let program = doc.getElementById('programForUpdate').value;
    if (id == "" || name == "" || program == "") {
        alert("Please fill all the fields");
        return;
    }
    let optionValues = doc.getElementById('ddlStudentForUpdate');
    for(let e of optionValues){
        if(e.value == id) {
            updateStudent(id, name, program);
            doc.getElementById('myform').reset()
            return;
        }
    }
    alert("Please select student id from dropdown or input valid id");
});
