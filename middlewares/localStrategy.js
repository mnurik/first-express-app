import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/user';

passport.use(new LocalStrategy({
  usernameField: 'login',
  passwordField: 'password',
  session: false,
}, async (login, password, done) => {
  try {
    const user = await User.findOne({ login });
    if (!user) { return done(null, false); }
    if (password !== user.password) { return done(null, false); }

    return done(null, user);
  } catch (error) {
    done(error);
  }

  return done;
}));
