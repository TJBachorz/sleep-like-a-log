import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { buildSchema } = require('graphql');

export const schema = buildSchema(`
    type Query {
        hello: String
    }
`);
