const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  uuid: {
    type: String,
    unique: true,
    required: true,
  },
  uniqueId: {
    type: String,
    unique: true,
    required: true,
  },
});

const address = mongoose.model("address", addressSchema);

module.exports = address;
