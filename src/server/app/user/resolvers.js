import { AuthenticationError } from 'apollo-server-koa';
import { accountService } from 'srv/app/account';
import { userService } from './index';

const userResolvers = {
  Query: {
    user: async (root, { _id }) => {
      try {
        const user = await userService.single({
          qr: {
            _id
          }
        });
        return user;
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  User: {
    account: async ({ accountId }) => {
      try {
        const account = await accountService.single({
          qr: {
            _id: accountId
          }
        });
        return account;
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  Mutation: {
    updateUser: async (root, {
      firstName,
      lastName
    }, { userId }) => {
      if (!userId) {
        throw new AuthenticationError('User must be authenticated');
      }
      try {
        const user = await userService.put({
          params: {
            qr: {
              _id: userId
            }
          },
          body: {
            firstName,
            lastName
          }
        });
        return user;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};

export default userResolvers;
