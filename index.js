const express = require('express');
const { connectToDb } = require('./models');

const app = express();

app.get('/', function(request,response){
  response.send ('hallo dunia!');
})

app.get('/about', function (req,res) {
  res.send ('<h2 style="color: skyblue;">HALLO INI ABOUT PAGE</h2>');
})

app.get('/users', async function (req,res) {
  const connection = await connectToDb();
  const [user] = await connection.query('SELECT * from users');

  await connection.end();

  return res.send(`
    <pre>${JSON.stringify(user, null, 2)}</pre>`)
})

app.get('/users/:id', async function (req,res) {
  const connection = await connectToDb();
  const [user] = await connection.query(`SELECT * from users WHERE id = ${req.params.id}`);
  await connection.end();

  return res.send(`
    <pre>${JSON.stringify(user, null, 2)}</pre>`)
})

//
app.get('/kategori', async function (req, res) {
  const connection = await connectToDb();
  const [user] = await connection.query(`SELECT * FROM kategori`);
  await connection.end();

  return res.send(`
    <pre>${JSON.stringify(user, null, 2)}</pre>`)
})

// //code baru
// app.get('/todos-kategori', async function (req, res) {
//     const connection = await connectToDb();
//     const [results] = await getTodosAndkategori(connection);
    
//     await connection.end();

//     return res.send(`
//       <pre>${JSON.stringify(results, null, 2)}</pre>`);
// })

// app.listen(5000, function(){
//   console.log ('server is running on http://localhost:5000');
// });