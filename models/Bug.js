const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BugSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = Bug = mongoose.model('bug', BugSchema);