const express = require('express');
const router = express.Router()
const moviesApiController = require('../../controllers/api/moviesController')

router.post('/', moviesApiController.create)
router.delete('/:id', moviesApiController.delete)

module.exports = router