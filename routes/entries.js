const express = require("express");
const entriesRoutes = express.Router();
const JournalEntry = require("../models/journalEntry");

entriesRoutes.get("/", (req, res) => {
    let query = JournalEntry.find();
    if (req.query.day) {
        const nextDay = (Number(req.query.day) + 1).toString();
        query
        .where("createdAt")
        .gte(new Date(req.query.year, req.query.month, req.query.day))
        .lt(new Date(req.query.year, req.query.month, nextDay))
    }

    query.exec((err, entries) => {
        if (err) return res.status(500).send(err);
        return res.send(entries);
    })
});

module.exports = entriesRoutes;
