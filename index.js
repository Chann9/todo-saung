const express = require('express');
const { connectToDb } = require('./models');
const usersRouter = require('./routers/users');


const app = express();

app.use(express.json());

app.use("/users", usersRouter);

app.get('/kategori', async function (req, res) {
  const connection = await connectToDb();
  const [kategori] = await connection.query(`SELECT * FROM kategori`);
  await connection.end();

  return res.json(kategori);
})

app.get('/todos', async function (req, res) {
  const connection = await connectToDb();
  const [todos] = await connection.query('SELECT * from todos');
  
  await connection.end();

  return res.json(todos);
})

app.listen(5000, function(){
  console.log ('server is running on http://localhost:5000');
});