import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { findUser, verifyPassword } from '../helpers/user';
import models from '../models';

passport.use(new LocalStrategy({
  usernameField: 'login',
  passwordField: 'password',
  session: false,
}, async (login, password, done) => {
  try {
    const { dataValues: user } = await models.User.findOne({ where: { login } });
    if (!user) { return done(null, false); }
    console.log('====================================');
    console.log(typeof user, user);
    console.log('====================================');
    // const passwordIsCorrect = await verifyPassword({ login, password });
    if (password !== user.password) { return done(null, false); }

    return done(null, user);
  } catch (error) {
    done(error);
  }

  return done;
}));
