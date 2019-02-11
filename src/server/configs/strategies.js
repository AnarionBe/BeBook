import passport from "passport";
import {Strategy as JWTStrategy, ExtractJwt} from "passport-jwt";
import User from "../models/User";

const jwtStrategy = () => {
    const opts = {
        secretOrKey: process.env.JWT_SECRET || "secret",
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    };

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

export default jwtStrategy;
