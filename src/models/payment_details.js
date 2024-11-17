const mongoose = require('mongoose');

const PaymentDetailsSchema = new mongoose.Schema({
    cardholderName: {
        type: String,
        trim: true,
        required: [true, 'Please provide cardholder name'],
        minlength: 1,
        maxlength: 50,
    },
    cardNumber: {
        type: String,
        required: [true, 'Please provide card number'],
        maxlength: 16,
        minlength: 16,
    },
    expirationDate: {
        type: String,
        required: [true, 'Please provide expiration date'],
        match: [/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiration date must be in MM/YY format'],
    },
    securityCode: {
        type: String,
        required: [true, 'Please provide security code (CVV)'],
        minlength: 3,
        maxlength: 4,
    },
    billingZip: {
        type: String,
        required: [true, 'Please provide billing zip code'],
        minlength: 5,
        maxlength: 10,
    },
});

module.exports = mongoose.model('PaymentDetails', PaymentDetailsSchema);
