import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { buildSchema } = require('graphql');

export const schema = buildSchema(`
    type SleepLog {
        id: ID!
        bedTime: String!
        sleepTime: String!
        hoursSlept: Float!
        wakeUpTime: String!
        isSpicyFood: Boolean!
        isAlchohol: Boolean!
        isSleepMedication: Boolean!
        user: [User!]!
    }

    input SleepLogInput {
        bedTime: String!
        sleepTime: String!
        hoursSlept: Float!
        wakeUpTime: String!
        isSpicyFood: Boolean!
        isAlchohol: Boolean!
        isSleepMedication: Boolean!
        user: [User!]!
    }

    type User {
        id: ID!
        email: String!
        password: String!
    }

    input User {
        email: String!
        password: String!
    }
`);
