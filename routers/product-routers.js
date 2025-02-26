const express = require('express');
const router = express.Router();
const {insertSampleProducts, getProductStats} = require("../controllers/product-controllers")

router.post('/add', insertSampleProducts);
router.get('/stats', getProductStats);

module.exports = router;