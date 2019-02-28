/* eslint-disable import/prefer-default-export */
import users from '../data/users.json';

export const findUser = ({ login }, cb) => {
  try {
    cb(null, users.find(user => user.login === login));
  } catch (error) {
    cb(error);
  }
};

export const verifyPassword = ({ login, password }) => findUser(login).password === password;
