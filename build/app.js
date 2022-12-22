"use strict";
const express = require('express');
const mysql = require('mysql');
const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kees123',
    database: 'test_db',
    port: 3306
});
connection.connect((err) => {
    if (err) {
        throw err;
    }
    else {
        console.log('Connected!');
    }
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
console.log("App is running on port" + port);
