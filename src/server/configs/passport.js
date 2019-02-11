import passport from "passport";
import {Strategy as JWTStrategy, ExtractJwt} from "passport-jwt";
import User from "../models/User";

const opts = {
    // TODO: Don't forget to add JWT_SECRET to the environment variables.
    secretOrKey: process.env.JWT_SECRET || "secret",
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

export default () => {
    passport.use(
        new JWTStrategy(opts, (payload, done) => {
            User.findById(payload.id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err));
        }),
    );
};
