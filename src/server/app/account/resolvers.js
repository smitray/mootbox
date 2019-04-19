import { AuthenticationError } from 'apollo-server-koa';
import { userService } from 'srv/app/user';
import { accountService } from './index';

const accountResolvers = {
  Query: {
    accounts: async (root, { accType = 'user' }) => {
      try {
        const accounts = await accountService.get({
          qr: {
            accType
          }
        });
        return accounts;
      } catch (err) {
        throw new Error(err);
      }
    },
    account: async (root, { _id }) => {
      try {
        const account = await accountService.single({
          qr: {
            _id
          }
        });
        return account;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Account: {
    user: async ({ _id }) => {
      try {
        const user = await userService.single({
          accountId: _id
        });
        return user;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    createAccount: (root, {
      firstName,
      lastName,
      username,
      email,
      password,
      accType = 'user'
    }) => {
      const account = accountService.createAccount({
        firstName,
        lastName,
        username,
        email,
        password,
        accType
      });
      return account;
    },
    login: (root, {
      username,
      password
    }) => {
      const account = accountService.login({
        username,
        password
      });
      return account;
    },
    updateAccount: async (root, {
      username,
      password,
      email
    }, { authId }) => {
      if (!authId) {
        throw new AuthenticationError('User must be authenticated');
      }
      try {
        const account = await accountService.put({
          params: {
            qr: {
              _id: authId
            }
          },
          body: {
            username,
            email,
            password
          }
        });
        return account;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};

export default accountResolvers;
