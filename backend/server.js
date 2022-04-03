const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const port = process.env.PORT

connectDB()

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/psestocks', require('./routes/stocksRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port ${port}`))