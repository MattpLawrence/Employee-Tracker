const db = require("../db/connection");
const inquirer = require("inquirer");

function viewAllEmployees() {
  return db.promise().query(`SELECT * FROM employee`);
}

function addDepartment() {}

module.exports = { viewAllEmployees };
