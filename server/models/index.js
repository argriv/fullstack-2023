const { schemaComposer } = require('graphql-compose')
require('./Products')
require('./user/user')
const graphqlSchema = schemaComposer.buildSchema()
module.exports = graphqlSchema
