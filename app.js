'use strict';

const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

const port = 3000;

mongoose.connect('mongodb://admin:admin@ds017258.mlab.com:17258/scrumpoker', ( err ) => {
    err ? console.error(err) : console.log('mongo connected');
});
const app = express();
const server = require('http').createServer(app);
require('./server/config/express')(app);
require('./server')(app);

app.listen(port, (err) => {
    err ? console.error( err ) : console.log( 'Express server listening on port ' + port );
});



