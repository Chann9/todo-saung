const express = require('express');
const todoModels = require('../models/todos.models');

const router = express.Router();

router.get('/', async function (req,res) {
    const todos = await todoModels.getTodos(req.params.id);
    return res.json(todos[0]);
});

module.exports = router;