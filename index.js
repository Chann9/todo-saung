const express = require('express');
const path = require('path');
const { connectToDb } = require('./models');
const usersRouter = require('./routers/users');
const ollamaRouter = require('./routers/ollama');
const authRouter = require('./routers/auth');
const cors = require('cors');
const proxy = require('express-http-proxy');
const chatbotRouter = require('./routers/chatbot');

const categoryRouter = require('./routers/categories');
const todosRouter = require('./routers/todos');

const app = express();

app.use(express.json());
app.use(cors());
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

app.use("/api/ollama", ollamaRouter);

app.use("/api/auth", authRouter);

app.use("/api/chatbot", chatbotRouter);

//frontend todos
app.get('/todos', async function(req, res) {
  return res.sendFile(path.join(__dirname , './views/todos/index.html'))
})

//buat kategori
app.get('/kategori', async function(req, res) {
  return res.sendFile(path.join(__dirname , './views/kategori/index.html'))
})

app.use('/',proxy('localhost:5173'));

app.listen(5000, function(){
  console.log ('server is running on http://localhost:5000');
});