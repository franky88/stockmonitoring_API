const asyncHandler = require("express-async-handler")
const Stock = require("../models/stockModel")
// @des         Get stocks
// @route       GET /api/psestocks
// @access      Private
const getStocks = asyncHandler( async (req, res) => {
    const stocks = await Stock.find()
    res.status(200).json(stocks)
})

// @des         Post stock
// @route       POST /api/psestocks
// @access      Private
const postStock = asyncHandler( async  (req, res) => {
    console.log(req.body)
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const stock = await Stock.create({
        text: req.body.text
    })
    res.status(200).json(stock)
})

// @des         Update stock
// @route       PUT /api/psestocks/:id
// @access      Private
const updateStock = asyncHandler( async  (req, res) => {
    const stock = await Stock.findById(req.params.id)
    if(!stock){
        res.status(400)
        throw new Error("Stock not found")
    }

    const updatedStock = await Stock.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedStock)
})

// @des         Delete stock
// @route       DELETE /api/psestocks/:id
// @access      Private
const deleteStock = asyncHandler( async  (req, res) => {
    const stock = await Stock.findById(req.params.id)
    if(!stock){
        res.status(400)
        throw new Error("Stock not found")
    }

    await stock.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getStocks,
    postStock,
    updateStock,
    deleteStock
}