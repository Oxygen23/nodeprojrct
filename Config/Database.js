//import mysql connection
const mysql = require('mysql2');

// import dotenv 
const environment = require('dotenv');

//load envirement variable
environment.config();

//now we establish  connection to database
const config = mysql.createConnection({
    databases: process.env.DB_NAME,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    port:process.env.PORT,
    host:process.env.DB_HOST,
   
});

//connect to database
config.connect((error)=>{
    if(!error){
        console.log("fail to connect to databases");
    }else{
        console.log("databases connection is successfully");
    }
});

module.exports = config;

