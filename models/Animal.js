const mongoose = require("mongoose")
const AnimalSchema = mongoose.Schema({
    Animal_name: String,
    color:{
        type: String,
        required: true,
        match: /^[a-zA-Z]+$/
      },
    weight: {
        type:Number,
        min: 1,
        max: 5000 } 
    
})

module.exports = mongoose.model("Animal",AnimalSchema)