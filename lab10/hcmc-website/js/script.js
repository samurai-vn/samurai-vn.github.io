// class Patient {
//     constructor(id, firstName, middleName, lastName, dayOfBirth, department, isOutpatient) {
//         this.patientID = id;
//         this.firstName = firstName;
//         this.middleName = middleName;
//         this.lastName = lastName;
//         this.dayOfBirth = dayOfBirth;
//         this.department = department;
//         this.isOutpatient = isOutpatient;
//     }
//     get patientID() {
//         return this.patientID;
//     }
//     set patientID(id) {
//         this.patientID = id;
//     }

//     get firstName() {
//         return this.firstName;
//     }
//     set firstName(name) {
//         this.firstName = name;
//     }

//     get middleName() {
//         return this.middleName;
//     }
//     set middleName(name) {
//         this.middleName = name;
//     }

//     get lastName() {
//         return this.lastName;
//     }
//     set lastName(name) {
//         this.lastName = name;
//     }

//     get dayOfBirth() {
//         return this.dayOfBirth;
//     }
//     set dayOfBirth(dob) {
//         this.dayOfBirth = dob;
//     }

//     get department() {
//         return this.department;
//     }
//     set department(dpmt) {
//         this.department = dpmt;
//     }

//     get isOutpatient() {
//         return this.isOutpatient;
//     }
//     set isOutpatient(isOutPatient) {
//         this.isOutpatient = isOutPatient;
//     }

// }


/** Lab10 a */
const doc = document;
let submitBtn = doc.getElementById("btnRegisterPatient");

let patientId = doc.getElementById("patientIdNumber");

let firstName = doc.getElementById("firstName");
let middlename = doc.getElementById("middleInitials");
let lastName = doc.getElementById("lastName");

let dayOfBirth = doc.getElementById("dateOfBirth");
let department = doc.getElementById("ddlDepartment");

let isOutPatientYes = doc.getElementById("radioIsOutPatientYes");
let isOutPatientNo = doc.getElementById("radioIsOutPatientNo");

let tableBody = doc.getElementById("tbodyPatientsList");
let chkElderlyPatients = doc.getElementById("chkElderlyPatients");
let chkOutPatients = doc.getElementById("chkShowOutPatients");

submitBtn.addEventListener('click', regPatientClick)
function regPatientClick(evt) {
    evt.preventDefault();
    let tr = doc.createElement('tr');

    let td1 = doc.createElement('td');
    td1.textContent = patientId.value;

    let td2 = doc.createElement('td');
    td2.textContent = firstName.value;

    let td3 = doc.createElement('td');
    td3.textContent = middlename.value;

    let td4 = doc.createElement('td');
    td4.textContent = lastName.value;

    let td5 = doc.createElement('td');
    td5.textContent = dayOfBirth.value;

    let td6 = doc.createElement('td');
    td6.textContent = department.value;

    let td7 = doc.createElement('td');
    td7.textContent = isOutPatientYes.checked ? "Yes" : "No";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tableBody.appendChild(tr);

}
/** Lab10 b c */

function getAge(dob) {
    //calculate month difference from current date in time  
    let month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format  
    let age_dt = new Date(month_diff);

    //extract year from date      
    let year = age_dt.getUTCFullYear();

    //now calculate the age of the user  
    let age = Math.abs(year - 1970);
    return age;
}
let isElderlyFilter = false;
let isOutPatientsFilter = false;
function filterElderlyPatients(evt) {
    let tableNodes = doc.getElementsByName("tbodyPatientsList")
    let childNodes = tableNodes[0].childNodes;
    if (chkElderlyPatients.checked) {
        isElderlyFilter = true;
        childNodes.forEach(node => {
            if (node.tagName == 'TR') {
                let childs = node.children;
                const date = new Date(childs[4].textContent);
                const age = getAge(date);
                if (age < 65) {
                    node.classList.add("d-none")
                }
            }
        })
    } else {
        isElderlyFilter = false;
        childNodes.forEach(node => {
            if (node.tagName == 'TR') {
                node.classList.remove("d-none");
            }
        })
        if (isOutPatientsFilter) 
        {
            filterOutPatients(evt);
        }
    }
}


/** Lab10 c */

function filterOutPatients(evt) {
    let tableNodes = doc.getElementsByName("tbodyPatientsList")
    let childNodes = tableNodes[0].childNodes;
    if (chkOutPatients.checked) {
        isOutPatientsFilter = true;
        childNodes.forEach(node => {
            if (node.tagName == 'TR') {
                let childs = node.children;
                let outPatient = childs[6].textContent;
                if (outPatient == "No") {
                    node.classList.add("d-none")
                }
            }
        })
    }
    else {
        isOutPatientsFilter = false;
        childNodes.forEach(node => {
            if (node.tagName == 'TR') {
                node.classList.remove("d-none");
            }
        })
        if (isElderlyFilter) 
        {
            filterElderlyPatients(evt);
        }
    }
    
}
chkOutPatients.addEventListener('change', filterOutPatients);
chkElderlyPatients.addEventListener('change', filterElderlyPatients);