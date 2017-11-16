const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JournalEntrySchema = new Schema({
    title: {
        type: String,
        default: ""
    },
    text: {
        type: String,
        default: ""
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

module.exports = mongoose.model("JournalEntry", JournalEntrySchema);
