const express = require("express");
const passport = require("passport");
const Strategy = require("passport-local");
const jwt = require("jsonwebtoken");
const settings = require("../settings");

const User = require("../models/user");
const authRouter = express.Router();

// use passport to create a strategy
passport.use(new Strategy((usernameAttempt, passwordAttempt, done) => {
    // attempt to find usernameAttempt in database
        // handle error, return false
        // if currentUser null, return false
        // else usernameAttempt good, check passwordAttempt
            // (write method on User constructor to check passwordAttempt)
            // check .auth method on currentUser and return done callback to handle return from .auth cb
    User.findOne({username: usernameAttempt}, (err, currentUser) => {
        if (err) {
            done(err, false);
        } else if (currentUser === null) {
            done(null, false);
        } else {
            currentUser.auth(passwordAttempt, isCorrect => {
                done(null, isCorrect);
            });
        }
    });
}));

// initialize passport Strategy
authRouter.use(passport.initialize());

// ROUTES \\
// POST - signup
    // find username in database
        // handle error
        // if existingUser NOT null, username already taken
        // else - save newUser, return saved user and auth token (so user can login right away after signing up)
authRouter.post("/signup", (req, res) => {
    User.findOne({username: req.body.username}, (err, existingUser) => {
        if (err) {
            res.status(500).send({
                success: false,
                err
            });
        } else if (existingUser !== null) {
            res.status(500).send({
                success: false,
                err: "Sorry, this username is already taken."
            });
        } else {
            const newUser = new User(req.body);
            newUser.save((err, savedUser) => {
                if (err) {
                    res.status(500).send({
                        success: false,
                        err
                    });
                } else {
                    res.status(201).send({
                        success: true,
                        savedUser
                    });
                }
            });
        }
    });
})


// POST - login
    // find username in database -- need passport authenticate
    // handle error
        // if user is null, user does not exist in DB
        // else send back user without password and auth token
authRouter.post("/login", passport.authenticate("local", {session: false}), (req, res) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if (err) {
            res.status(500).send({
                success: false,
                err
            });
        } else if (user === null) {
            res.status(404).send({
                success: false,
                err: "Sorry, this username was not found."
            });
        } else {
            res.status(201).send({
                success: true,
                user: user.withoutPassword(),
                token: jwt.sign(user.withoutPassword(), settings.secret, {
                    expiresIn: 60 * 30 * 24
                })
            });
        }
    });
});

module.exports = authRouter;
