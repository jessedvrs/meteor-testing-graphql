import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
    name: 'TodoType',
    fields: () => ({
        label: {type: GraphQLString}
    })
});
