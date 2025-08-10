const express = require('express');
const { connectToDb } = require('../models');
const userModels = require('../models/user.models');

const router = express.Router();

router.get('/', async function (req,res) {
    const users = await userModels.getUsers();

    return res.json(users);
  })

router.get('/:id', async function (req,res) {
    const user = await userModels.getUserById(req.params.id);

    return res.json(user[0]);
  })

router.post('/', async function (req,res) {
    const createUser = await userModels.createUser({
    name: req.body.name,
    email : req.body.email,
    nickname : req.body.nickname,
    password : req.body.password,
});

    return res.json(createUser)
});
module.exports = router;