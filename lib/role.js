const db = require("../db/connection");
const inquirer = require("inquirer");

function viewAllRoles() {
  db.query(`SELECT * FROM role`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
}

function addDepartment() {}

module.exports = { viewAllRoles };
