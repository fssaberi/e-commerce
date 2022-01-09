const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [
        Product,
        ProductTag
      ]
    })
    res.json(tags)
  } catch(error) {
    res.status(500).send(error)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [
        Product,
        ProductTag
      ]
    })
    res.json(tags)
  } catch(error) {
    res.status(500).send(error)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tags = await Tag.create(req.body)
    res.json(tags)
  } catch(error) {
    res.status(500).send(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tags = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(tags)
  } catch(error) {
    res.status(500).send(error)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tags = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(tags)
  } catch(error) {
    res.status(500).send(error)
  }
});

module.exports = router;
