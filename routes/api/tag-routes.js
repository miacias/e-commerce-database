const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product }] // includes associated Product data
    });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by ID
  try {
    const oneTag = await Tag.findByPk(req.params.id, {
      include: [{model: Product}] // includes associated Product data
    });
    if (!oneTag) {
      res.status(404).json({message: "No category found with that ID."});
      return;
    }
    res.status(200).json(oneTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body, {
      include: [{ model: Product }] // includes associated products
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update tag name by ID
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      },
      include: [{model: Product}] // includes associated products
    });
    if (!updateTag) {
      res.status(404).json({message: "No tag found with that ID."});
      return;
    }
    res.status(200).json(updateTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by ID
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      },
      include: [{model: Product}] // includes associated products
    });
    if (!deleteTag) {
      res.status(404).json({message: "No tag found with that ID."});
      return;
    }
    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;