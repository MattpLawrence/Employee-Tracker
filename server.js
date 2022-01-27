const express = require("express");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
//require hidden information form .env file
require("dotenv").config();
//pull in port information from .env
const PORT = process.env.DB_HOST;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
