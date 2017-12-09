const express = require("express");
const JournalEntry = require("../models/journalEntry");
const User = require("../models/user");
const expressJwt = require("express-jwt");
const settings = require("../settings");

const journalRoutes = express.Router();

journalRoutes.use(expressJwt({secret: settings.secret}));

journalRoutes.get("/verify", (req, res) => {
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

journalRoutes.get("/", (req, res) => {
    JournalEntry.find({user: req.user._id})
        .exec((err, entries) => {
            if (err) return res.status(500).send(err);
            return res.send(entries);
        })
});

journalRoutes.get("/entries/:year/:month/:day", (req, res) => {
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

journalRoutes.get("/entries/:year/:month", (req, res) => {
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

journalRoutes.get("/entries/:year", (req, res) => {
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

journalRoutes.get("/:id", (req, res) => {
    JournalEntry.findOne({_id: req.params.id, user: req.user._id}, (err, entry) => {
        if (err) return res.status(500).send(err);
        return res.send(entry);
    });
});

journalRoutes.post("/", (req, res) => {
    const newEntry = new JournalEntry(req.body);
    newEntry.user = req.user._id;
    newEntry.save((err, addedEntry) => {
        if (err) return res.status(500).send(err);
        return res.send(addedEntry);
    });
});

journalRoutes.delete("/:id", (req, res) => {
    JournalEntry.findOneAndRemove({_id: req.params.id, user: req.user._id}, (err, deletedEntry) => {
        if (err) return res.status(500).send(err);
        return res.send({Message: "This journal entry has been deleted!"});
    });
});

journalRoutes.put("/:id", (req, res) => {
    JournalEntry.findOneAndUpdate({_id: req.params.id, user: req.user._id}, req.body, {new: true}, (err, editedEntry) => {
        if (err) return res.status(500).send(err);
        return res.send(editedEntry);
    });
});

module.exports = journalRoutes;
