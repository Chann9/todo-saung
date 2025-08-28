const express = require("express");
const todoModels = require("../models/todos.models");

const router = express.Router();

router.get("/", async function (req, res) {
  const todos = await todoModels.getTodos(req.params.id);
  return res.json(todos[0]);
});

router.get("/:id", async (req, res) => {
  const todo = await todoModels.getTodoById(req.params.id);
  res.json(todo[0]);
});

router.post("/", async (req, res) => {
  const createTodo = await todoModels.createTodo(req.body);
  res.json(createTodo);
});

router.put("/:id", async (req, res) => {
  const updateTodo = await todoModels.updateTodo(req.params.id, req.body);
  res.json({ success: updateTodo.affectedRows > 0 });
});

router.delete("/:id", async (req, res) => {
  const deleteTodo = await todoModels.deleteTodo(req.params.id);
  res.json({ success: deleteTodo.affectedRows > 0 });
});

module.exports = router;