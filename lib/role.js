const db = require("../db/connection");
const inquirer = require("inquirer");

function viewAllRoles() {
  return db.promise().query(`SELECT * FROM role`);
}

async function addRole() {
  await inquirer
    .prompt([
      {
        type: "input",
        message: "What is the id of the department?",
        name: "inqDepID",
      },
      {
        type: "input",
        message: "What is the name of the new role?",
        name: "inqRole",
      },
      {
        type: "input",
        message: "What is the salary for the new role?",
        name: "inqSalary",
      },
    ])
    .then((response) => {
      console.log(`New role added: ${response.inqRole}`);
      return db
        .promise()
        .query(
          `INSERT INTO role(title, salary, department_id) VALUES ("${response.inqRole}","${response.inqSalary}", "${response.inqDepID}")`
        );
    });
}

module.exports = { viewAllRoles, addRole };
