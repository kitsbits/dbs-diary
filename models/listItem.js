const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: String,
    details: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
}, { timestamps: true });

module.exports = mongoose.model("ListItem", ListItemSchema);
