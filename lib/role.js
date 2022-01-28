const db = require("../db/connection");
const inquirer = require("inquirer");

function viewAllRoles() {
  return db.promise().query(`SELECT * FROM role`);
}

module.exports = { viewAllRoles, addDepartment };
