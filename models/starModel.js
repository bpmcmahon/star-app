const mongoose = require("mongoose")

const starSchema = new mongoose.Schema(
    {
        Name:{
            type: String,
            unique: true,
            required: true
        },
        SolarSystem:{
            type: String,
            unique: true,
            required: true
        },
        Type:{
            type: String,
            unique: false,
            required: true
        },
        EarthDistanceLightYears:{
            type: Number,
            unique: false,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Stars = mongoose.model("Stars", starSchema);
module.exports = Stars