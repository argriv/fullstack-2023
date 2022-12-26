const mongoose = require('mongoose')
const { composeWithMongoose } = require('graphql-compose-mongoose')
const method = require('./method')
const { model, Schema } = require('mongoose')
const extend = require('../utils/extend-mongoose')
const { schemaComposer } = require('graphql-compose')

const createModel = (name, definition) => {
    const modelSchema = new mongoose.Schema({
        created: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    })

    const AdminUserSchema = extend(modelSchema, definition, {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    })
    const model = mongoose.model(name, AdminUserSchema)

    const customizationOptions = {}

    const tc = composeWithMongoose(model, customizationOptions)


    
    return method(tc, name, model)
}

module.exports = createModel
