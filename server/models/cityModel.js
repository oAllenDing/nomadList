const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const citySchema = new Schema({
    cityName: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    }

}, { timestamps: true });

module.exports = mongoose.model('City', citySchema);

