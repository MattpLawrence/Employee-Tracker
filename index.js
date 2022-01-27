const inquirer = require("inquirer");
const fs = require("fs");
const cTable = require("console.table");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");
const { Console } = require("console");
const { response } = require("express");

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

let viewAllDepartments = (response) => {
  const allDepartments = cTable.getTable([]);
};
