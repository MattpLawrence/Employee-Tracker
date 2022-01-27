const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const fs = require("fs");
const path = require("path");
const { env } = require("process");
//require hidden information form .env file
require("dotenv").config();
//pull in port information from .env
const PORT = process.env.DB_HOST;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database

const db = mysql.createConnection(
  {
    host: PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log("Connected tot he database")
);

function viewAllDepartments() {
  app.get("");
}
