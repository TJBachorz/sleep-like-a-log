import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { buildSchema } = require('graphql');

export const schema = buildSchema(`
    type SleepLog {
        id: ID!
        date: String!
        bedtime: String!
        approximate_sleep_time: String!
        hours_slept: Float!
        wake_up_time: String!
        ate_spicy: Boolean!
        drank_alcohol: Boolean!
        used_sleep_meds: Boolean!
        notes: String
        user: User
    }

`);
    
    // input SleepLogInput {
    //     bedtime: String!
    //     approximate_sleep_time: String!
    //     hours_slept: Float!
    //     wake_up_time: String!
    //     ate_spicy: Boolean!
    //     drank_alcohol: Boolean!
    //     used_sleep_meds: Boolean!
    //     notes: String
    //     user: User
    // }

    // input User {
    //     email: String!
    //     password: String!
    // }