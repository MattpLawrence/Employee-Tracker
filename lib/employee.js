const db = require("../db/connection");
const inquirer = require("inquirer");

function viewAllEmployees() {
  db.query(`SELECT * FROM employee`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
}

function addDepartment() {}

module.exports = { viewAllEmployees };
