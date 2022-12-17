const createModel = require('./schema')

const Products = createModel('Products', {
    //imgUrl: { type: String, default: '' },
    title: { type: String, required: true },
    text: { type: String, required: true },
    price: Number,
    rating: Number,
    positions: [String],
})

module.exports = Products
