const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/redirect', passport.authenticate('google'), function(req, res) {
    res.send(req.body);
});

module.exports = router;