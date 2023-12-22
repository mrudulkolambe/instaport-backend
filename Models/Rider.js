const mongoose = require("mongoose");


const RIDER_SCEHMA = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobileno: {
        type: String,
        required: true,
        unique: true
    },
    wallet_amount: {
        type: Number,
        required: true,
        default: 0
    },
    approve: {
        type: Boolean,
        required: true,
        default: false
    },
    role: {
        type: String,
        default: "rider",
        required: true
    },
    token: {
        type: String
    },
    age: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        required: true,
        default: "available",
        enum: ['active', 'available', 'offline', "disabled"]
    },
    timestamp: {
        type: Number,
        default: Date.now()
    },
    image: {
        type: String,
        required: true,
        default: "https://fastly.picsum.photos/id/829/1000/1000.jpg"
    }
})

module.exports = mongoose.model("RIDER", RIDER_SCEHMA);