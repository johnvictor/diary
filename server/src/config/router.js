const express = require('express');
const router = express.Router();
const { getNotesRoute, addNoteRoute } = require('../route/notes.route');
const { getNotesController, addNoteController } = require('../controller/notes.controller');

// router.use('', function(req, res, next) {
//     res.send('Hello world 3');
// });

router.get('/notes', getNotesController);
router.post('/note', addNoteRoute, addNoteController);

module.exports = router;