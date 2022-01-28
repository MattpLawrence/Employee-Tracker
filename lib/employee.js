const db = require("../db/connection");
const inquirer = require("inquirer");

function viewAllEmployees() {
  return db.promise().query(`SELECT * FROM employee`);
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
        message: "What is the first name of the employee you want to update?",
        name: "inqFirstName",
      },
      {
        type: "input",
        message: "What is the last name of the employee?",
        name: "inqLastName",
      },
    ])
    .then((response) => {
      return db
        .promise()
        .query(
          `SELECT id, first_name, last_name, role_id FROM employee WHERE first_name = ${inqFirstName}, last_name = ${inqLastName}`
        );
    });
}

module.exports = { viewAllEmployees, addEmployee, updateEmployee };
// SELECT
//   first_name,
//   last_name,
//   id,
//   role
// FROM
//   employee
// WHERE
//   first_name = `${first_name}`,
//   last_name = `${last_name}`;

// UPDATE employee
// SET
//   role = `${newRole}`,
// WHERE
//   id = `${returnedID};
