import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
    name: 'Todo',
    fields: () => ({
        label: {type: GraphQLString}
    })
});
