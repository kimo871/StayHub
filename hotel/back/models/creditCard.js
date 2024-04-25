const mongoose = require('mongoose');

const creditCardSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        required:true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    cvv: {
        type: String,
        required: true
    }
})

module.exports = creditCardSchema;