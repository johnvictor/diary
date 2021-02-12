const passport = require('passport');
const GoogleStragety = require('passport-google-oauth20');
const UserModel = require('../model/user.model');
const KEYS = require('../config/keys');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await UserModel.findById(id);
    done(null, user);
});

passport.use(
    new GoogleStragety({
        callbackURL: '/auth/google/redirect',
        clientID: KEYS.passport.google.clientID,
        clientSecret: KEYS.passport.google.clientSecret
    }, async (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        const user = await UserModel.findOne({googleId: profile.id});
        if(user) {
            done(null, user);
        } else {
            const newUser = await new UserModel({
                username: profile.displayName,
                googleId: profile.id
            }).save();
            done(null, newUser);
        }
    })
);