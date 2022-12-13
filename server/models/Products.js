const createModel = require('./schema')

const Products = createModel('Products', {
        paintings: [
            {
                imgUrl: { type: String, default: '' },
                title: { type: String, required: true },
                text: { type: String, required: true },
                price: { type: String, require: true },
            },
        ],
})

module.exports = Products
