import { createApolloServer } from 'meteor/apollo';
import schema from '/imports/server/schema';

createApolloServer({schema}, {}, {});
