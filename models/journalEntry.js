const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JournalEntrySchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    details: [{
        title: String,
        text: String,
        lastUpdated: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model("JournalEntry", JournalEntrySchema);
