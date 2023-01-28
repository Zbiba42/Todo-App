const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
    maxLength: 100,
  },
  done: {
    type: Boolean,
    default: false,
    required: true,
  },
})

module.exports = mongoose.model('Todo', TodoSchema)
