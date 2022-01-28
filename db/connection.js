const express = require("express");
const mysql = require("mysql2");
const fs = require("fs");
const { env } = require("process");
//require hidden information form .env file
require("dotenv").config();
//pull in port information from .env
const PORT = process.env.PORT || 3001;
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
  console.log("Connected to the database")
);
