const db = require("../db/connection");
const inquirer = require("inquirer");

function viewAllEmployees() {
  return db.promise().query(`SELECT * FROM role`);
}
function addDepartment() {}

module.exports = { viewAllRoles };
