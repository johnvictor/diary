const passport = require('passport');
const GoogleStragety = require('passport-google-oauth20');
const UserModel = require('../model/user.model');
const KEYS = require('../config/keys');


passport.use(
    new GoogleStragety({
        callbackURL: '/auth/google/redirect',
        clientID: KEYS.passport.google.clientID,
        clientSecret: KEYS.passport.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        new UserModel({
            username: profile.displayName,
            googleId: profile.id
        }).save(function(err, user) {
            console.log(user);
        });
        done();
    })
);