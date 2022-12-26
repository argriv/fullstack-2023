const createModel = require('./schema')

const Products = createModel('Products', {
    //imgUrl: { type: String, default: '' },
    title: { type: String, required: true },
    text: { type: String, required: true },
    price: Number,
    rating: Number,
    position: [String],
})

module.exports = Products
