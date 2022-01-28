const db = require("../db/connection");
const inquirer = require("inquirer");

function viewAllDepartments() {
  return db.promise().query(`SELECT * FROM department`);
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the new department?",
        name: "inqDepartment",
      },
    ])
    .then((response) => {
      return db
        .promise()
        .query(`INSERT INTO department(name) VALUES (${response.name})`);
    });
  // INSERT INTO role(title, salary, department_id)
  // VALUES(`${Department}`);
}

module.exports = { viewAllDepartments, addDepartment };
