const express = require('express');
const router = express.Router();
const genreApiController = require('../../controllers/api/genresController')

router.get('/genres', genreApiController.list)
router.get('/genres/:id', genreApiController.detail)

module.exports = router