'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
mongoose.Promise = require('q').Promise;

const app = express();
const port = 3000;

mongoose.connect('mongodb://admin:admin@ds017258.mlab.com:17258/scrumpoker', ( err ) => {
    err ? console.error(err) : console.log('mongo connected');
});

app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({'extended':'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

require('./server')(app);

app.listen(port, (err) => {
    err ? console.error( err ) : console.log( 'Express server listening on port ' + port );
});



