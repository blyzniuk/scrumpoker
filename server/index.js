'use strict';

module.exports = (app) => {

	const express = require('express');

	app.use('/api/example', require('./api/example'));

	app.get('*', (req, res) => {
		res.status(404).json({"err" : "page not found"});
	});

};