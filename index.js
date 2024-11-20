const form = document.querySelector("form");
const naam = document.getElementById("name");
const rollNo = document.getElementById("rollNo");
const emailID = document.getElementById("emailID");
const contact = document.getElementById("contact");
const entries = document.querySelector(".entries");

// Function to create a student entry element
function createStudentEntry(student) {
    // Create a new list entry
    const entry = document.createElement("li");
    entry.classList.add("student-entry");

    const studentName = document.createElement("span");
    studentName.textContent = student.name;
    const studentRollNo = document.createElement("span");
    studentRollNo.textContent = student.rollNo;
    const studentEmailID = document.createElement("span");
    studentEmailID.textContent = student.emailID;
    const studentContact = document.createElement("span");
    studentContact.textContent = student.contact;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    // Append child elements to the entry
    entry.appendChild(studentName);
    entry.appendChild(studentRollNo);
    entry.appendChild(studentEmailID);
    entry.appendChild(studentContact);
    entry.appendChild(editBtn);
    entry.appendChild(removeBtn);

    // Add the entry to the list
    entries.appendChild(entry);

    // return the created entry with buttons for later use (edit and remove)
    return { entry, editBtn, removeBtn };
}

function updateLocalStorage(students) {
    localStorage.setItem("students", JSON.stringify(students));
}

// Edit button functionality (repopulate form fields)
function editStudent(student, entry) {
    naam.value = student.name;
    rollNo.value = student.rollNo;
    emailID.value = student.emailID;
    contact.value = student.contact;

    // Remove the entry from the list and update localStorage
    entry.remove();
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students = students.filter((s) => s.rollNo !== student.rollNo);
    updateLocalStorage(students);
}

// Remove button functionality
function removeStudent(student, entry) {
    entry.remove();
    student = student.filter((s) => s.rollNo !== student.rollNo);
    localStorage.setItem("students", JSON.stringify(students));
}

function displayStudentsFromLocalStorage() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.forEach(student => {
        const { entry, editBtn, removeBtn } = createStudentEntry(student);

        editBtn.addEventListener("click", () => editStudent(student, entry));
        removeBtn.addEventListener("click", () => removeStudent(student, entry));
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputName = naam.value.trim();
    const inputRollNo = rollNo.value.trim();
    const inputEmailID = emailID.value.trim();
    const inputContact = contact.value.trim();

    const student = {
        name: inputName,
        rollNo: inputRollNo,
        emailID: inputEmailID,
        contact: inputContact
    };

    // Save the student data in an array in localStorage
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    updateLocalStorage(students);

    // Create the student entry and append it to the list
    const { entry, editBtn, removeBtn } = createStudentEntry(student);

    // Set up edit and remove functionality for the new entry
    editBtn.addEventListener("click", () => editStudent(student, entry));
    removeBtn.addEventListener("click", () => removeStudent(student, entry));

    // Clear the input fields after submission
    naam.value = "";
    rollNo.value = "";
    emailID.value = "";
    contact.value = "";
});

// Display students stored in localStorage on page load (for persistence)
window.addEventListener("DOMContentLoaded", displayStudentsFromLocalStorage);

