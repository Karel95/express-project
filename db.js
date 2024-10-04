// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
//async function connectDB(){}
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',  // replace with your actual password
  database: 'test',
  ssl: false
});

// A simple SELECT query
try {
  const [results, fields] = await connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45'
  );

  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
} catch (err) {
  console.log(err);
}

// Using placeholders
try {
  const [results] = await connection.query(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    ['Page', 45]
  );

  console.log(results);
} catch (err) {
  console.log(err);
}

//module.exports = connectDB;