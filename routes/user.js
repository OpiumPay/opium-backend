const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

// Define your API endpoints.
router.post("/register", userController.register)

module.exports = router
