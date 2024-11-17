const mongoose = require('mongoose');

const ShippingAddressSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'Please provide first name'],
        minlength: 1,
        maxlength: 50,
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Please provide last name'],
        minlength: 1,
        maxlength: 50,
    },
    addressLineOne: {
        type: String,
        trim: true,
        required: [true, 'Please provide street address'],
    },
    addressLineTwo: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        required: [true, 'Please provide city'],
        trim: true,
    },
    state: {
        type: String,
        required: [true, 'Please provide state/province/region'],
        trim: true,
        maxlength: 50,
    },
    zip: {
        type: String,
        required: [true, 'Please provide zip code'],
        minlength: 5,
        maxlength: 10,
    },
    country: {
        type: String,
        required: [true, 'Please provide country'],
        trim: true,
        maxlength: 50,
    }
});

module.exports = mongoose.model('ShippingAddress', ShippingAddressSchema);