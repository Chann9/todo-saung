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

router.delete('/:id', async function (req,res) {
  const deleteUser = await userModels.deleteusers(req.params.id);

    res.json({
      success: deleteUser.affectedRows > 0
    })
})

router.put("/:id", async function (req,res) {
  const updateUser = await userModels.updateusers(req.params.id, req.body);

    res.json({
      success: updateUser.affectedRows > 0
    })
})

module.exports = router;