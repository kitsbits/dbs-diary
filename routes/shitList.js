const express = require("express");
const shitListRoutes = express.Router();
const ListItem = require("../models/listItem");
const expressJwt = require("express-jwt");
const settings = require("../settings");

shitListRoutes.use(expressJwt({secret: settings.secret}));

shitListRoutes.get("/", (req, res) => {
    ListItem.find({user: req.user._id}, (err, shitlist) => {
        if (err) return res.status(500).send(err);
        return res.send(shitlist);
    });
});

shitListRoutes.get("/:id", (req, res) => {
    ListItem.findOne({_id: req.params.id, user: req.user._id}, (err, shit) => {
        if (err) return res.status(500).send(err);
        return res.send(shit);
    });
});

shitListRoutes.post("/", (req, res) => {
    const NewShit = new ListItem(req.body);
    NewShit.user = req.user._id;
    NewShit.save((err, shitAdded) => {
        if (err) return res.status(500).send(err);
        return res.send(shitAdded);
    });
});

shitListRoutes.delete("/:id", (req, res) => {
    ListItem.findOneAndRemove({_id: req.params.id, user: req.user._id}, (err, deletedShit) => {
        if (err) return res.status(500).send(err);
        return res.send({Message: "This shit has been successfully deleted!"});
    });
});

shitListRoutes.put("/:id", (req, res) => {
    ListItem.findOneAndUpdate({_id: req.params.id, user: req.user._id}, req.body, {new: true}, (err, editedShit) => {
        if (err) return res.status(500).send(err);
        return res.send(editedShit);
    });
});

module.exports = shitListRoutes;
