const db = require("../db/connection");
const inquirer = require("inquirer");

function viewAllDepartments() {
  return db.promise().query(`SELECT * FROM department`);
}

async function addDepartment() {
  await inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the new department?",
        name: "inqDepartment",
      },
    ])
    .then((response) => {
      console.log(`New Department added: ${response.inqDepartment}`);
      return db
        .promise()
        .query(
          `INSERT INTO department(name) VALUES ("${response.inqDepartment}")`
        );
    });
}
module.exports = { viewAllDepartments, addDepartment };
