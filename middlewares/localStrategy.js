import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { findUser, verifyPassword } from '../helpers/user';

passport.use(new LocalStrategy({
  usernameField: 'login',
  passwordField: 'password',
  session: false,
}, async (login, password, done) => {
  try {
    const user = await findUser({ login });
    if (!user) { return done(null, false); }

    const passwordIsCorrect = await verifyPassword({ login, password });
    if (!passwordIsCorrect) { return done(null, false); }

    return done(null, user);
  } catch (error) {
    done(error);
  }

  return done;
}));
