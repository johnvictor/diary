function getProfile(req, res) {
    res.redirect('http://localhost:4200/notes');
    // res.send(req.user.username);
}   

module.exports = {
    getProfileRoute: getProfile
};