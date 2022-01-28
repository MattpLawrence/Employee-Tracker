const mysql = require("mysql2");
require("dotenv").config();
//pull in port information from .env
const PORT = process.env.PORT || 3001;

// connect to database

const db = mysql.createConnection({
  host: PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = db;
