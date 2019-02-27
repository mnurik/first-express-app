import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { findUser, verifyPassword } from '../helpers/user';

passport.use(new LocalStrategy((login, password, done) => {
  findUser({ login }, (err, user) => {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }
    if (!verifyPassword({ login, password })) { return done(null, false); }
    return done(null, user);
  });
}));
