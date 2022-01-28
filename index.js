const inquirer = require("inquirer");
const fs = require("fs");
const cTable = require("console.table");
const { viewAllDepartments, addDepartment } = require("./lib/department");
const { viewAllRoles } = require("./lib/role");
const { viewAllEmployees } = require("./lib/employee");
const db = require("./db/connection");
const { viewAllEmployees } = require("./lib/employee");

firstPrompts();
function firstPrompts() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update and employee's role",
        ],
      },
    ])
    .then((response) => {
      if (response.action === "View all departments") {
        viewAllDepartments();
      } else if (response.action === "View all roles") {
        viewAllRoles();
      } else if (response.action === "View all employees") {
        viewAllEmployees();
      } else if (response.action === "Add a department") {
        addDepartment();
      } else if (response.action === "Add a role") {
        addRole();
      } else if (response.action === "Add an employee") {
        addEmployee();
      } else if (response.action === "Update and employee's role") {
        updateEmployee();
      } else {
        console.log("Invalid choice.");
      }
    });
}

function next() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you want to start another query?",
        name: "next",
        choices: ["Yes", "No"],
      },
    ])
    .then((response) => {
      if (response.next === "Yes") {
        firstPrompts();
      } else {
        db.end();
        console.log("Thanks for using the database.");
      }
    });
}
