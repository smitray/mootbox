import {
  ApolloServer,
  gql
} from 'apollo-server-koa';
import mongoose from 'mongoose';
import { verify } from 'jsonwebtoken';

import {
  graphDefs,
  resolvers
} from 'srv/app';

import { SERVER_SECRET } from 'cfg';

const secret = SERVER_SECRET.split(',');

const { ObjectId } = mongoose.Types;

export default (app) => {
  // eslint-disable-next-line func-names
  ObjectId.prototype.valueOf = function () {
    return this.toString();
  };

  const Query = gql`
    type Query {
      _empty: String
    }

    schema {
      query: Query
      mutation: Mutation
    }
  `;

  const server = new ApolloServer({
    typeDefs: [
      Query,
      ...graphDefs

    ],
    resolvers,
    context: async ({
      ctx: {
        request
      }
    }) => {
      if (request.headers.authorization) {
        const token = request.headers.authorization;
        if (token && token.split(' ')[0] !== 'Bearer') {
          throw new Error('Invalid Authorization Header');
        }
        const {
          authId,
          userId,
          accType
        } = verify(token.split(' ')[1], secret[0]);
        return {
          authId,
          userId,
          accType
        };
      }
      return null;
    },
    playground: process.env.NODE_ENV !== 'production'
  });
  server.applyMiddleware({ app });
};
