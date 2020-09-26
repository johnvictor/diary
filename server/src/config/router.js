const express = require('express');
const router = express.Router();
const { getNotesRoute, addNoteRoute } = require('../route/notes.route');
const { getNotesController, addNoteController } = require('../controller/notes.controller');
const { getProfileRoute } = require('../controller/profile.controller');

const authcheck = (req, res, next) => {
    if(!req.user) return res.send('Not logged in');

    next();
};

router.get('/notes', authcheck, getNotesController);
router.post('/note', authcheck, addNoteRoute, addNoteController);
router.get('/profile', authcheck, getProfileRoute);

module.exports = router;