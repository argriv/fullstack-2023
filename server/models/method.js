const { schemaComposer } = require('graphql-compose')
const adminAccess = require('../utils/admin-access')
const method = (tc, name) => (

    schemaComposer.Query.addFields({
        [name + '_ById']: tc.getResolver('findById'),
        [name + '_ByIds']: tc.getResolver('findByIds'),
        [name + '_Many']: tc.getResolver('findMany')
            .addFilterArg({
                name: 'priceRange',
                type: `input IntRange {
                    gt: Int
                    lt: Int
                }`,
                description: 'Search by price range',
                defaultValue: { gt: 0, lt: 100 },
                query: (rawQuery, value, resolveParams) => {
                    if (value.gt || value.lt) {
                        const price = {}
                        console.log(value)
                        if (value.gt) price.$gt = value.gt
                        if (value.lt) price.$lt = value.lt
                        rawQuery.price = price
                        console.log(rawQuery.price)
                    }
                },
            })
            .addFilterArg({
                name: 'rating',
                type: 'Int',
                description: 'Search by rating',
                defaultValue: 0,
                query: (rawQuery, value, resolveParams) => {
                    rawQuery.rating = value
                },
            }),
    }),
    schemaComposer.Mutation.addFields({
        [name + '_CreateOne']: tc.getResolver('createOne'),
        [name + '_CreateMany']: tc.getResolver('createMany'),
        [name + '_UpdateById']: tc.getResolver('updateById'),
        [name + '_RemoveById']: tc.getResolver('removeById'),
        [name + '_RemoveMany']: tc.getResolver('removeMany'),
    }),
    schemaComposer.buildSchema()
)
module.exports = method
