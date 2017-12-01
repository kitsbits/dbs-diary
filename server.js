const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const port = process.env.PORT || 10100;
const path = require("path");
const config = require("./settings");

app.use(express.static(path.resolve(__dirname, "client", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.use(bodyParser.json());
app.use(cors());

app.use("/shitlist", require("./routes/shitList"));
app.use("/journal", require("./routes/journal"));
app.use("/auth", require("./routes/auth"));

mongoose.connect(config.db,
    { keepAlive: true, reconnectTries: Number.MAX_VALUE, useMongoClient: true },
    err => {
        if (err) throw err;
        console.log("Connected to the diary database");
    }
);

app.listen(config.port, () => {
    console.log(`Server is running on port ${port}`);
});
