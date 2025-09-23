const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    belt: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  });

//creating a module based on our schema
module.exports = mongoose.model('Player', playerSchema);