# Student Registration System

The **Student Registration System** is a simple web application designed to manage student records. It allows users to register student details such as:

- Name
- Roll Number
- Email ID
- Contact Number

Once the student is registered, the system displays a list of all registered students where records can be edited or removed. The data is stored in the browser's **localStorage** for persistence, ensuring that the records are saved even if the page is reloaded.

---

## Demo

A live demo of the project can be accessed [here](https://monika-dangar.github.io/student-registration-system/).

---

## Features

- **Form Validation**: The form fields are validated for correct data entry. For example:
  - Name accepts only alphabetic characters and spaces.
  - Roll number, contact number, and email are also validated for proper format.
  
- **Add Student**: Users can add a student by entering details into the form.
  
- **Display Student List**: A list of all registered students is displayed in a table-like format.
  
- **Edit Student**: Users can click the "Edit" button next to any student's entry to repopulate the form with that student's details and make changes.
  
- **Remove Student**: Users can delete a student entry, which will be removed from both the displayed list and localStorage.

---

## Technologies Used

- **HTML5**: Markup language used for the structure of the webpage.
- **CSS (Tailwind)**: Styling for the layout and design of the webpage.
- **JavaScript**: Used for handling the logic for form submission, editing, deleting, and managing localStorage.
- **LocalStorage**: Used to persist student data even after page refreshes.

---

## Installation

### Step 1: Clone the Repository

To get started with the project, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/student-registration-system.git
```

### Step 2: Open the Project

Navigate to the project folder:

```bash
cd student-registration-system
```

### Step 3: Open the HTML File

Simply open the `index.html` file in your web browser. You can double-click the file to open it in a browser or use a local server (if you prefer).

---

## Usage

1. **Register a Student**: Fill out the form with the student’s name, roll number, email, and contact number, then click **Submit**.
   
2. **View Registered Students**: After submitting, the student will appear in the list on the right section of the page. The student’s details, along with **Edit** and **Remove** buttons, will be displayed.

3. **Edit a Student**: Click on the **Edit** button next to any student to repopulate the form with their details. You can then modify and submit the form to update their information.

4. **Remove a Student**: Click on the **Remove** button to delete the student entry from both the list and localStorage.

---

## How It Works

1. **LocalStorage**: When a student is added or edited, the data is saved in the browser's **localStorage**. This ensures the data persists even after a page refresh or closing the browser.

2. **Form Handling**: When the form is submitted, the data is validated (e.g., ensuring the correct format for contact numbers and emails). Upon success, the student is added to the localStorage and displayed in the list.

3. **Edit and Remove**: Each student entry comes with an **Edit** button that allows the user to modify the student’s information and a **Remove** button to delete that entry.

---

## Contributing

1. **Fork the repository** to your own GitHub account.
2. **Create a new branch** for your feature or bug fix.
3. **Make your changes**, ensuring they work as expected.
4. **Commit your changes** and push them to your forked repository.
5. **Open a pull request** with a description of what you've done.

---
