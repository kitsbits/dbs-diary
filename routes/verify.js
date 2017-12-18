const express = require("express");
const User = require("../models/user");
const expressJwt = require("express-jwt");
const settings = require("../settings");

const verify = express.Router();

verify.use(expressJwt({secret: settings.secret}));

verify.get("/verify", (req, res) => {
    User.findById(req.user._id, (err, user) => {
        if(err){
            res.status(500).send({
                success: false,
                err
            })
        } else if(user === null){
            res.status(400).send({
                success: false,
                err: "User not found!"
            })
        } else {
            res.status(200).send({
                success: true,
                user: user.withoutPassword(),
            })
        }
    })
});

module.exports = verify;
