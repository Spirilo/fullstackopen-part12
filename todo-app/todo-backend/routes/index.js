const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

// GET redis data
router.get('/statistics', async (req, res) => {
  const data = await redis.getAsync('added_todos')

  if(!data) res.send({ added_todos: 0})
  else res.send({ added_todos: data})
})

module.exports = router;
