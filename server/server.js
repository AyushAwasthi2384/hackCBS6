const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
const app = express();

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    charset: "utf8mb4",
    port: 3306,
});