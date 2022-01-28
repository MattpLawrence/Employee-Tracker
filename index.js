const inquirer = require("inquirer");
const fs = require("fs");
const cTable = require("console.table");
const { viewAllDepartments, addDepartment } = require("./lib/department");
const { viewAllRoles, addRole } = require("./lib/role");
const { viewAllEmployees, addEmployee } = require("./lib/employee");
const db = require("./db/connection");
const { Console } = require("console");

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database");
  firstPrompts();
});

function firstPrompts() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update and employee's role",
        ],
      },
    ])
    .then((response) => {
      if (response.action === "View all departments") {
        viewAllDepartments()
          .then(([rows, fields]) => {
            console.table(rows);
          })
          .catch(console.log)
          .then(() => next());
      } else if (response.action === "View all roles") {
        viewAllRoles()
          .then(([rows, fields]) => {
            console.table(rows);
          })
          .catch(console.log)
          .then(() => next());
      } else if (response.action === "View all employees") {
        viewAllEmployees()
          .then(([rows, fields]) => {
            console.table(rows);
          })
          .catch(console.log)
          .then(() => next());
      } else if (response.action === "Add a department") {
        addDepartment().then(() => {
          next();
        });
      } else if (response.action === "Add a role") {
        viewAllDepartments()
          .then(([rows, fields]) => {
            console.table(rows);
          })
          .catch(console.log)
          .then(() =>
            addRole().then(() => {
              next();
            })
          );
      } else if (response.action === "Add an employee") {
        viewAllRoles()
          .then(([rows, fields]) => {
            console.table(rows);
          })
          .catch(console.log)
          .then(() =>
            addEmployee().then(() => {
              next();
            })
          );
        // viewAllRoles()
        //   .then(([rows, fields]) => {
        //     console.table(rows);
        //   })
        //   .catch(console.log)
        //   .then(() => {
        //     viewAllEmployees()
        //     .then(([rows, fields]) => {
        //       console.table(rows);
        //     })
        //     .catch(console.log)
        //     .then(() =>
        //       addEmployee()
        //       .then(()=>{
        //         next();
        //       })
        //   );
        //     }
      } else if (response.action === "Update and employee's role") {
        updateEmployee();
      } else {
        console.log("Invalid choice.");
      }
    });
}

function next() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you want to start another query?",
        name: "next",
        choices: ["Yes", "No"],
      },
    ])
    .then((response) => {
      if (response.next === "Yes") {
        firstPrompts();
      } else {
        db.end();
        console.log("Thanks for using the database.");
      }
    });
}
