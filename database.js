import mysql from 'mysql';

export default connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  
    password: 'kees123',      
    database: 'employee_database',  
    port: 3306  
});

module.exports = connection;