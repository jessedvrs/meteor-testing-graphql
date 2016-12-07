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
        name: 'RootQueryType',
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
             * Query: todos
             */
            todos: {
                type: new GraphQLList(todoType),
                args: {
                    limit: {type: GraphQLInt}
                },
                resolve: (_, args, context) => {
                    const todos = [
                        {
                            label: 'Prepare a talk for the Meteor meetup.'
                        },
                        {
                            label: 'Run a few miles.'
                        }
                    ];

                    return todos.slice(0, args.limit);
                }
            }
        }
    })
});
