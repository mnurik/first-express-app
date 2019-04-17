import User from '../../../models/user';

/* eslint-disable implicit-arrow-linebreak */
export default {
  Query: {
    user: (root, args) => new Promise((resolve, reject) =>
      User.findOne(args).exec((err, res) =>
        (err ? reject(err) : resolve(res)))),
    users: () => new Promise((resolve, reject) =>
      User.find({})
        .populate()
        .exec((err, res) =>
          (err ? reject(err) : resolve(res)))),
  },
  Mutation: {
    addUser: (root, newUserData) => {
      const newUser = new User(newUserData);

      return new Promise((resolve, reject) =>
        newUser.save((err, res) =>
          (err ? reject(err) : resolve(res))));
    },
    editUser: (root, { _id, ...newUserData }) =>
      new Promise((resolve, reject) =>
        User.findOneAndUpdate({ _id }, { $set: newUserData }).exec(
          (err, res) => (err ? reject(err) : resolve(res)),
        )),
    deleteUser: (root, args) =>
      new Promise((resolve, reject) =>
        User.findOneAndRemove(args).exec((err, res) =>
          (err ? reject(err) : resolve(res)))),
  },
};
