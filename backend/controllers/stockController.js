const asyncHandler = require("express-async-handler")
// @des         Get stocks
// @route       GET /api/psestocks
// @access      Private
const getStocks = asyncHandler( async (req, res) => {
    res.status(200).json({ message: "Get PSE stocks" })
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
    res.status(200).json({ message: "Post stock" })
})

// @des         Update stock
// @route       PUT /api/psestocks/:id
// @access      Private
const updateStock = asyncHandler( async  (req, res) => {
    res.status(200).json({ message: `Update stock ID ${req.params.id}` })
})

// @des         Delete stock
// @route       DELETE /api/psestocks/:id
// @access      Private
const deleteStock = asyncHandler( async  (req, res) => {
    res.status(200).json({ message: `Delete stock ID ${req.params.id}` })
})

module.exports = {
    getStocks,
    postStock,
    updateStock,
    deleteStock
}