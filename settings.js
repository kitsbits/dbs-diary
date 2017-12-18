module.exports = {
    port: process.env.PORT || 10100,
    secret: process.env.SECRET || "fish umbrella dogs cactus",
    db: process.env.DB || "mongodb://localhost/diary",
}
