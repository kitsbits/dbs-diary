const express = require("express");
const JournalEntry = require("../models/journalEntry");
const expressJwt = require("express-jwt");
const settings = require("../settings");

const entryRoutes = express.Router();

entryRoutes.use(expressJwt({secret: settings.secret}));

entryRoutes.get("/:year/:month/:day", (req, res) => {
    console.log("in here")
    const query = JournalEntry.find({user: req.user._id});
    const nextDay = (Number(req.params.day) + 1).toString();
    query
    .where("createdAt")
    .gte(new Date(req.params.year, req.params.month, req.params.day))
    .lt(new Date(req.params.year, req.params.month, nextDay))
    query.exec((err, entries) => {
        if (err) return res.status(500).send(err);
        return res.send(entries);
    })
});

entryRoutes.get("/:year/:month", (req, res) => {
    console.log("in here")
    const query = JournalEntry.find({user: req.user._id});
    const nextMonth = (Number(req.params.month) + 1).toString();
    query
    .where("createdAt")
    .gte(new Date(req.params.year, req.params.month))
    .lt(new Date(req.params.year, nextMonth))

    query.exec((err, entries) => {
        if (err) return res.status(500).send(err);
        return res.send(entries);
    })
});

entryRoutes.get("/:year", (req, res) => {
    console.log("in here")
    const query = JournalEntry.find({user: req.user._id});
    const nextYear = (Number(req.params.year) + 1).toString();
    query
    .where("createdAt")
    .gte(new Date(req.params.year))
    .lt(new Date(nextYear))

    query.exec((err, entries) => {
        if (err) return res.status(500).send(err);
        return res.send(entries);
    })
});

module.exports = entryRoutes;
