const mongoose = require('mongoose')

// creating the product schema
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  quantity: {
    type: Number,
    
  },
})

module.exports = mongoose.model('Product', ProductSchema)