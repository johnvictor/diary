function getProfile(req, res) {
    res.send(req.user.username);
}   

module.exports = {
    getProfileRoute: getProfile
};