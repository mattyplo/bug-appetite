const express = require('express');
const router = express.Router();

// Bug Model
const Bug = require('../../models/Bug');

// @route GET api/bugs
// @desc Get All Bugs
// @access Public
router.get('/', async (req, res) => {

  // Using pagination
  const { page = 1, limit = 10 } = req.query;

  try {
    const bugs = await Bug.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Bug.countDocuments();

    res.json({
      bugs,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    console.error(err.message);
  }

  // simple, no pagination
  // Bug.find()
  //   .sort({ dateAdded: -1})
  //   .then(bugs => res.json(bugs));
});

// @route POST api/bugs
// @desc Create A Bug
// @access Public
router.post('/', (req, res) => {
  const newBug = new Bug({
    name: req.body.name,
    price: req.body.price
  });

  newBug.save().then(bug => res.json(bug));
});

// @route DELETE api/bugs/:id
// @desc delete a bug
// @access Public
router.delete('/:id', (req, res) => {
  Bug.findById(req.params.id)
    .then(bug => bug.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;