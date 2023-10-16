const express = require("express")
const router = express.Router()
const apiController = require("../controllers/apiController")

// Define your API endpoints.
router.get("/hello", apiController.hello)

module.exports = router
