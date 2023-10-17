// const User = require("../models/User")
const validateRegisterInput = require("../validation/register")

const userController = {}

userController.register = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  res.send("hello world !!!")
}

module.exports = userController
