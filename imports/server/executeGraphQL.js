import { Meteor } from 'meteor/meteor';
import { execute } from 'graphql';
import schema from './schema';

export default function executeGraphQL({documentAST, variables = {}, context = {}, rootValue = {}}) {
    return Meteor.wrapAsync((done) => {

        /**
         * Call GraphQL's execute function directly
         */
        execute(schema, documentAST, rootValue, context, variables)
            .then((response) => {
                done(null, response);
            });
    })();
};
