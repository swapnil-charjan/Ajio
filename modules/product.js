const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    brand: {type: String, required: true, trim: true},
    price: {type: String, required: true, min: 0},
    description: {type: String, trim: true},
    category: {type: String, required: true, trim: true},
    images: [{type: String, required: true, trim: true}]
});

module.exports = mongoose.model('Product', productSchema);
