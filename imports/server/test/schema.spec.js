import { chai } from 'meteor/practicalmeteor:chai';
import gql from 'graphql-tag';
import execute from '/imports/server/executeGraphQL';

describe('schema', function() {
    it('should resolve Hello world!', function() {
        const { data } = execute({
            documentAST: gql`
                query {
                    greet
                }
            `
        });

        chai.assert.equal(data.greet, 'Hello world!');
    });

    it('should resolve limited todo list', function() {
        const { data } = execute({
            documentAST: gql`
                query _($limit: Int) {
                    todos (limit: $limit) {
                        label
                    }
                }
            `,
            variables: {
                limit: 1
            }
        });

        chai.assert.equal(data.todos.length, 1);
    });
});
