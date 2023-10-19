const mongoose = require("mongoose")
const Schema = mongoose.Schema

const multisegSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  availableBalance: {
    type: Number,
    required: true,
  },
  safeBalance: {
    type: Number,
    required: true,
  },
})

const documentSchema = new Schema({
  aadharFront: {
    filename: String,
    data: Buffer,
    contentType: String,
  },
  aadharBack: {
    filename: String,
    data: Buffer,
    contentType: String,
  },
  userPhoto: {
    filename: String,
    data: Buffer,
    contentType: String,
  },
})

const kycSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  document: documentSchema,
  timestamp: {
    type: Date,
    default: Date.now,
  },
})

const userSchema = new Schema({
  walletAddress: {
    type: String,
    required: true,
  },
  kyc: kycSchema,
  multiseg: multisegSchema,
  timestamp: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model("users", userSchema)

module.exports = User
