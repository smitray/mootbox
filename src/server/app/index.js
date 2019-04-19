import { merge } from 'lodash';

import { accountDefs, accountResolvers } from './account';
import { userDefs, userResolvers } from './user';

export const graphDefs = [
  accountDefs,
  userDefs
];


export const resolvers = merge(
  accountResolvers,
  userResolvers
);

export const routerControllPros = [];
