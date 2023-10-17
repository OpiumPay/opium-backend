const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { randomUUID } = require("crypto")

const transactionSchema = new Schema({
  id: {
    type: "UUID",
    default: () => randomUUID(),
  },
  walletAddress: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  receiverUPI: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
})

const Transaction = mongoose.model("transactions", transactionSchema)

module.exports = Transaction
