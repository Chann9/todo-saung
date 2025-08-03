const mysql = require('mysql2/promise');
const DB = require('./config/config');

const express = require('express');

const app = express();
async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: DB.DB_HOST,
      user: DB.DB_USER,
      password: DB.DB_PASSWORD,
      database: DB.DB_NAME,
      port: DB.DB_PORT
    });
    console.log('Connected to the database');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

app.get('/', function(request,response){
  response.send ('hallo dunia!');
})

app.get('/about', function (req,res) {
  res.send ('<h2 style="color: skyblue;">HALLO INI ABOUT PAGE</h2>');
})

app.get('/users', async function (req,res) {
  const [user] = await connection.query('SELECT * from users');
  return res.send(`
    <pre>${JSON.stringify(user, null, 2)}</pre>`)
})

app.listen(5000, function(){
  console.log ('server is running on http://localhost:5000');
});

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: DB.DB_HOST,
      user: DB.DB_USER,
      password: DB.DB_PASSWORD,
      database: DB.DB_NAME,
      port: DB.DB_PORT
    });
    console.log('Connected to the database');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

const main = async () => {
    const connection = await connectToDatabase();

    const [user] = await connection.query('SELECT * from users');
    console.log('User:', user);

    const [combinedtodos] = await connection.query(`SELECT 
	todos.id,
	todod.tittle,
	todos.description,
	todos.is_completed,
	todos.due_date,
	todos.user_id,
	users.name AS user_name,
	kategori.id AS kategori_id
	kategori.kategori_name AS kategori_name
from
	todos
	JOIN users ON users.id = todos.user_id
	JOIN kategori ON todos.kategori_id = kategori.id
where 
	user_id = 1;`);
    console.log('todos:', combinedtodos);

    await connection.end();
};

main();