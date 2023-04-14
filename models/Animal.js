const mongoose = require("mongoose")
const AnimalSchema = mongoose.Schema({
    Animal_name: String,
    color: String,
    weight: Number
})
module.exports = mongoose.model("Animal",AnimalSchema)