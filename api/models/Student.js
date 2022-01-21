const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    data: String,
    left: String
});

module.exports = mongoose.model('Student', studentSchema);