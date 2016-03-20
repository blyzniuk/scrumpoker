'use strict';

const express = require('express');
const path = require('path');
const passport = require('passport');

const User = require('./api/user/user.model');

require('./auth/local')(User);

passport.serializeUser(function(user, done) {
	const userId = user._id.toString();
	done(null, userId);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, (err, user) => {
		done(err, user);
	});
});

module.exports = function(app) {

    app.all('/api/*', require('./middleware/isAuthenticated'));

	app.use('/api/project', require('./api/project'));
	app.use('/api/story', require('./api/story'));
	app.use('/api/user', require('./api/user'));

    //app.post('/login', passport.authenticate('local', { successRedirect: 'http://localhost\:8000/#/',
	//	failureRedirect: 'http://localhost\:8000/#/login' }));

	app.post('/login', (req, res, next) => {
		passport.authenticate('local', (err, user, info) => {
			if (err) {
				return next(err);
			}
			if (!user) {
				return res.send({ success : false, message : 'signupfailed' });
			}
			return res.send({ success : true, message : 'signup succeeded' });
		})(req, res, next);
	});

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });

	app.get('*', (req, res) => {
		res.status(404).json({"err" : "page not found"});
	});
};