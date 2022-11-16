const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: Number,
    time: Date,
    message: String,
    email: String,
    country: String,
    amount: Number
}, { timestamps: true });

module.exports = mongoose.model('class', customerSchema);