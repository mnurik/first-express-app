/* eslint-disable import/prefer-default-export */
import users from '../data/users.json';

export const findUser = ({ login }) => new Promise((resolve, reject) => {
  try {
    resolve(users.find(user => user.login === login));
  } catch (error) {
    reject(error);
  }
});

export const verifyPassword = ({ login, password }) => new Promise((resolve, reject) => {
  try {
    findUser({ login }).then(user => resolve(user.password === password));
  } catch (error) {
    reject(error);
  }
});
