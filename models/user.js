const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
});

userSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

userSchema.methods.auth = function(passwordAttempt, cb) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) {
            console.log(err);
            return cb(false);
        } else {
            return cb(isMatch);
        }
    });
}

userSchema.methods.withoutPassword = function() {
    const user = this.toObject();
    delete user.password;
    return user;
}

module.exports = mongoose.model("User", userSchema);
