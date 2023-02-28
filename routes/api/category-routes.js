const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const allCategories = await Category.findAll({
      include: [{model: Product}] // includes associated products
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find category by ID via req.params.id
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: [{model: Product}] // includes associated products
    });
    res.status(200).json(oneCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create new category
  try {
    const newCategory = await Category.create(req.body, {
      include: [{model: Product}] // includes associated products
    });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update category by ID
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id
      },
      include: [{model: Product}] // includes associated products
    });
    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category ID
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id
      },
      include: [{model: Product}] // includes associated products
    });
    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;