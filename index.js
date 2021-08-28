import { createRequire } from "module";

const require = createRequire(import.meta.url);

const app = require('express')();
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const compression = require('compression');

app.use(compression());

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');