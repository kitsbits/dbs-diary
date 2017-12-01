module.exports = {
    port: process.env.PORT || 10100,
    secret: process.env.SECRET || "fish umbrella dogs octo",
    db: process.env.DB || "mongodb://localhost/diary",
}
