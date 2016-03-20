module.exports = function (req, res, next){
    req.isAuthenticated()
        ? next()
        : res.redirect('http://localhost\:8000/#/login');
};