const express = require("express");
const categoryModels = require("../models/category.models");

const router = express.Router();

//new category
router.get("/", async function (req, res) {
  const categories = await categoryModels.getCategories();
  return res.json(categories);
});

router.get("/:id", async (req, res) => {
  const category = await categoryModels.getCategoryById(req.params.id);
  return res.json(category[0]);
});

router.post("/", async function (req, res) {
  const createCategory = await categoryModels.createCategory(req.body);
  res.json(createCategory);
});

router.put("/:id", async (req, res) => {
  const updateCategory = await categoryModels.updateCategory(req.params.id,req.body);
  res.json({ success: updateCategory.affectedRows > 0 });
});

router.delete("/:id", async (req, res) => {
  const deleteCategory = await categoryModels.deleteCategory(req.params.id);
  res.json({ success: deleteCategory.affectedRows > 0 });
});

module.exports = router;