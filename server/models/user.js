const db = require('../config/connection');
const { Schema, model } = require('mongoose');

const petSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  colorMarks: {
    type: String,
  },
}, {
  timestamps: true,
});

const Pet = model('Pet', petSchema);
module.exports = Pet;