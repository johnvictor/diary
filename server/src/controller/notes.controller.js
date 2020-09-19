const express = require('express');
const NoteModel = require('../model/notes.model');

async function getNotes(req, res, next) {
    try {
        const notes = await NoteModel.find().select('-_id -__v');
        res.send(notes)
    } catch(err) {
        res.status(500).send('error');
    }

}

async function addNote(req, res, next) {
    try {
        const note = await new NoteModel(req.body).save();
        res.send(note);
    } catch(err) {
        res.status(500).send('error');
    }
}

exports.getNotesController = getNotes;
exports.addNoteController = addNote;