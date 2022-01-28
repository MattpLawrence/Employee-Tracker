const db = require("../db/connection");
const inquirer = require("inquirer");

function viewAllEmployees() {
  return db
    .promise()
    .query(`SELECT * FROM employee JOIN role ON employee.role_id = role.id `);
}

async function addEmployee() {
  await inquirer
    .prompt([
      {
        type: "input",
        message: "What is the first name of the employee?",
        name: "inqFirstName",
      },
      {
        type: "input",
        message: "What is the last name of the employee?",
        name: "inqLastName",
      },
      {
        type: "input",
        message: "What is the id for the role of the employee?",
        name: "inqRole",
      },
      {
        type: "input",
        message: "What is the id for the manager of the employee?",
        name: "inqManager",
      },
    ])
    .then((response) => {
      console.log(`New Employee added: ${response.inqFirstName}`);
      return db
        .promise()
        .query(
          `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("${response.inqFirstName}","${response.inqLastName}", "${response.inqRole}", "${response.inqManager}")`
        );
    });
}

async function updateEmployee() {
  await inquirer
    .prompt([
      {
        type: "input",
        message: "What is the id of the employee you want to update?",
        name: "inqEmpID",
      },
      {
        type: "input",
        message: "What is the role id for the new role?",
        name: "inqRoleID",
      },
    ])
    .then((response) => {
      console.log(
        `Employee Number ${response.inqEmpID} has been update to have a role number ${response.inqRoleID}`
      );
      return db
        .promise()
        .query(
          `UPDATE employee SET role_id = ${response.inqRoleID} WHERE id = ${response.inqEmpID}`
        );
    });
}

module.exports = { viewAllEmployees, addEmployee, updateEmployee };
