const db = require("../db/connection");

function viewAllDepartments() {
  return db.promise().query(`SELECT * FROM department`);
}

function addDepartment() {}

module.exports = { viewAllDepartments, addDepartment };
