const express = require("express")
const app = express()
const port = process.env.PORT || 3000

// Middleware for parsing JSON and handling CORS, if needed.

// Define your API routes.
const apiRoute = require("./routes/api")
app.use("/", apiRoute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
