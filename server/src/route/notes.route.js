const express = require('express');
const Joi = require('joi');

function getNotes(req, res, next) {
    console.log('router');
    next();
}

function addNote(req, res, next) {
    const hasError = noteSchema.validate(req.body);
    if(hasError.error) {
        res.json(hasError.error.details.map(item => item.message));
        return;
    }
    next();
}

const noteSchema = Joi.object({
    userId: Joi.string().required(),
    title: Joi.string().required(),
    note: Joi.string().required()
});

exports.getNotesRoute = getNotes;
exports.addNoteRoute = addNote;