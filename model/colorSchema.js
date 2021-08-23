const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    title: { type: String },
    imageUrl: { type: String },
    fellowEmail: { type: String }
});

const colorModel = mongoose.model('colors', colorSchema);

module.exports = { colorModel }