const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("dotenv").config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoURI = require("./config/keys").mongoURI

mongoose.connect(mongoURI)

const connection = mongoose.connection
connection.once("open", () => {
  console.log("MongoDB database connection established successfully")
})

// Middleware for parsing JSON and handling CORS, if needed.

// Define your API routes.
const apiRoute = require("./routes/api")
const userRoute = require("./routes/user")

app.use("/", apiRoute)
app.use("/user", userRoute)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
