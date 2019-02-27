/* eslint-disable import/prefer-default-export */
import users from '../data/users.json';

export const findUser = ({ login }, cb) => {
  cb(users.find(user => user.login === login));
};

export const verifyPassword = ({ login, password }) => findUser(login).password === password;
