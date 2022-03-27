// Imports
const mongoose = require("mongoose");

const { Schema } = mongoose;

// Schema
const urlSchema = new Schema({
  origin: {
    type: String,
    unique: true,
    required: true,
  },
  shortURL: {
    type: String,
    unique: true,
    required: true,
  },
});

// Model
const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
