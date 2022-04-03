const express = require("express")
const router = express.Router()
const { getStocks, postStock, updateStock, deleteStock } = require('../controllers/stockController')

router.route('/').get(getStocks).post(postStock)
router.route('/:id').delete(deleteStock).put(updateStock)

module.exports = router