// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");
let addNew = true;
let employeesArray = [];
let sum = 0;
let eAL = employeesArray.length;
let convertedEAL = parseInt(eAL);

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  while (addNew) {
    //do function
    let firstName = window.prompt("What is the employee's FIRST Name?");
    while (firstName === "") {
      if (firstName === "") {
        firstName = window.prompt("Please do not leave the first name blank.");
      }
    }
    let lastName = window.prompt("What is the LAST Name of the employee?");
    while (lastName === "") {
      if (lastName === "") {
        lastName = window.prompt("Please do not leave the last name blank.");
      }
    }
    let salaries = window.prompt("What is the employee's SALARY?");
    while (salaries === NaN) {
      if (salaries === NaN) {
        salaries = window.prompt("Please enter a valid number for salary.");
      }
    }
    //convert  from prompt string to number
    let employees = {
      firstName: firstName,
      lastName: lastName,
      salaries: parseInt(salaries),
    };
    employeesArray.push(employees);
    addNew = confirm("Would you like to ADD another employee?");
    if (!addNew) {
      break;
    }
    employees = {
      firstName: "",
      lastName: "",
      salaries: "",
    };
  } //lets user input new employee until cancel button is pressed
  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  for (let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i].salaries;
  }
  const average = sum / employeesArray.length;
  console.log(average);
};

//Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let randomIndex = Math.floor(Math.random() * convertedEAL);
  const randomEmployee = employeesArray[randomIndex];
  console.log(
    `Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}.`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salaries.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
