const Validator = require("validator")
const isEmpty = require("is-empty")

module.exports = function validateRegisterInput(data) {
  let errors = {}

  data.walletAddress = !isEmpty(data.walletAddress) ? data.walletAddress : ""

  if (Validator.isEmpty(data.walletAddress)) {
    errors.name = "walletAddress field is required"
  }
  return {
    errors,
    isValid: isEmpty(errors),
  }
}
