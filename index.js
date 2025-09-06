const express = require('express');
const path = require('path');
const { connectToDb } = require('./models');
const usersRouter = require('./routers/users');

const categoryRouter = require('./routers/categories');
const todosRouter = require('./routers/todos');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use("/users", usersRouter);

// app.get('/kategori', async function (req, res) {
//   const connection = await connectToDb();
//   const [kategori] = await connection.query(`SELECT * FROM kategori`);
//   await connection.end();

//   return res.json(kategori);
// })

// app.get('/todos', async function (req, res) {
//   const connection = await connectToDb();
//   const [todos] = await connection.query('SELECT * from todos');
  
//   await connection.end();

//   return res.json(todos);
// })

app.use("/api/kategori", categoryRouter);
app.use("/api/todos", todosRouter);

//frontend todos
app.get('/todos', async function(req, res) {
  return res.sendFile(path.join(__dirname , './views/todos/index.html'))
})

//buat kategori
app.get('/kategori', async function(req, res) {
  return res.sendFile(path.join(__dirname , './views/kategori/index.html'))
})

app.listen(5000, function(){
  console.log ('server is running on http://localhost:5000');
});