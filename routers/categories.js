const express = require('express');
const categoryModels = require('../models/category.models');

const router = express.Router();

router.get('/', async function (req,res) {
    const categories = await categoryModels.getCategories(req.params.id);
    return res.json(categories[0]);
});

module.exports = router;