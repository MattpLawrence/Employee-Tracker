const express = require("express");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
//require hidden information form .env file
require("dotenv").config();
const PORT = DB_HOST;
