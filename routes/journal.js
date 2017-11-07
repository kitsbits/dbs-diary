const express = require("express");
const journalRoutes = express.Router();
const JournalEntry = require("../models/journalEntry");

journalRoutes.get("/", (req, res) => {
    let query = JournalEntry.find();
    if (req.query.day) {
        const nextDay = (Number(req.query.day) + 1).toString();
        query
        .where("createdAt")
        .gte(new Date(req.query.year, req.query.month, req.query.day))
        .lt(new Date(req.query.year, req.query.month, nextDay))
    } else if (req.query.month) {
        const nextMonth = (Number(req.query.month) + 1).toString();
        query
        .where("createdAt")
        .gte(new Date(req.query.year, req.query.month))
        .lt(new Date(req.query.year, nextMonth))
    } else if (req.query.year) {
        const nextYear = (Number(req.query.year) + 1).toString();
        query
        .where("createdAt")
        .gte(new Date(req.query.year))
        .lt(new Date(nextYear))
    }

    query.exec((err, entries) => {
        if (err) return res.status(500).send(err);
        return res.send(entries);
    })
});

journalRoutes.get("/:year/:month/:day", (req, res) => {
    const query = JournalEntry.find();
    if (req.params.day) {
        const nextDay = (Number(req.params.day) + 1).toString();
        query
        .where("createdAt")
        .gte(new Date(req.params.year, req.params.month, req.params.day))
        .lt(new Date(req.params.year, req.params.month, nextDay))
    } else if (req.params.month) {
        const nextMonth = (Number(req.params.month) + 1).toString();
        params
        .where("createdAt")
        .gte(new Date(req.params.year, req.params.month))
        .lt(new Date(req.params.year, nextMonth))
    } else if (req.params.year) {
        const nextYear = (Number(req.params.year) + 1).toString();
        params
        .where("createdAt")
        .gte(new Date(req.params.year))
        .lt(new Date(nextYear))
    }

    query.exec((err, entries) => {
        if (err) return res.status(500).send(err);
        return res.send(entries);
    })
});

journalRoutes.get("/:id", (req, res) => {
    JournalEntry.findById(req.params.id, (err, entry) => {
        if (err) return res.status(500).send(err);
        return res.send(entry);
    });
});

journalRoutes.post("/", (req, res) => {
    const NewEntry = new JournalEntry(req.body);
    NewEntry.save((err, addedEntry) => {
        if (err) return res.status(500).send(err);
        return res.send(addedEntry);
    });
});

journalRoutes.delete("/:id", (req, res) => {
    JournalEntry.findByIdAndRemove(req.params.id, (err, deletedEntry) => {
        if (err) return res.status(500).send(err);
        return res.send({Message: "This journal entry has been deleted!"});
    });
});

journalRoutes.put("/:id", (req, res) => {
    JournalEntry.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, editedEntry) => {
        if (err) return res.status(500).send(err);
        return res.send(editedEntry);
    });
});

module.exports = journalRoutes;
