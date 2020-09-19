const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Note', NoteSchema);