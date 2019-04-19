import { gql } from 'apollo-server-koa';

const accountDefs = gql`

  type Account {
    _id: String,
    username: String,
    email: String,
    accType: String,
    token: String,
    user: User
  }

  extend type Query {
    accounts(accType: String): [Account],
    account(_id: String!): Account
  }

  type Mutation {
    createAccount(
      firstName: String!,
      lastName: String!,
      username: String!,
      email: String!,
      password: String!,
      accType: String
    ): Account
    updateAccount(
      username: String,
      password: String,
      email: String
    ): Account
    deleteAccount(
      _id: String!
    ): Account
    login(
      username: String!,
      password: String!
    ): Account
    socialLogin(
      username: String!,
      email: String!,
      socialId: String!,
      socialToken: String!
    ): Account
  }

`;

export default accountDefs;
