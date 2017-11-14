const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 10100;

app.use(bodyParser.json());
app.use(cors());

app.use("/shitlist", require("./routes/shitList"));
app.use("/journal", require("./routes/journal"));
app.use("/auth", require("./routes/auth"));

mongoose.connect("mongodb://localhost/diary",
    { keepAlive: true, reconnectTries: Number.MAX_VALUE, useMongoClient: true },
    err => {
        if (err) throw err;
        console.log("Connected to the diary database");
    }
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
