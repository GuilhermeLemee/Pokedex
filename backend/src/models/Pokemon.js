const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    validate: {
      validator: v => /^https?:\/\/.+/.test(v),
      message: props => `${props.value} não é uma URL válida`
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Pokemon', pokemonSchema);