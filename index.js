const mysql = require('mysql2/promise');
const DB = require('./config/config');

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

    const [todos] = await connection.query('SELECT * from todos');
    console.log('todos:', todos);

    await connection.end();
};

main();