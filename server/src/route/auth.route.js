const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/redirect', passport.authenticate('google'), function(req, res) {
    res.redirect('/api/profile')
});

router.get('/logout', function(req, res) {
    req.logout();
    req.session = null;
    res.send('Loggged out')
});

module.exports = router;