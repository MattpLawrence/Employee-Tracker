const db = require("../db/connection");
const inquirer = require("inquirer");

function viewAllDepartments() {
  db.query(`SELECT * FROM department`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
}

function addDepartment() {}

module.exports = { viewAllDepartments, addDepartment };
