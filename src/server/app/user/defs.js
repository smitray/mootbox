import { gql } from 'apollo-server-koa';

const userDefs = gql`

  type User {
    _id: String,
    firstName: String,
    lastName: String,
    # avatar: File,
    accountId: String,
    account: Account
  }

  extend type Query {
    user(
      _id: String!
    ): User
  }

  extend type Mutation {
    updateUser(
      firstName: String,
      lastName: String
    ): User
  }

`;

export default userDefs;
