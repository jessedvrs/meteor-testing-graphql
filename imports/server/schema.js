import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from 'graphql';
import todoType from './types/todoType';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Queries',
        fields: {

            /**
             * Query: foo
             */
            greet: {
                type: GraphQLString,
                resolve: () => {
                    return 'Hello world!';
                }
            },

            /**
             * Query: foo
             */
            todos: {
                type: new GraphQLList(todoType),
                args: {
                    limit: {type: GraphQLInt}
                },
                resolve: (_, args, context) => {
                    return [
                        {label: 'foo'},
                        {label: 'foofoo'}
                    ].slice(0, args.limit);
                }
            }
        }
    })
});
