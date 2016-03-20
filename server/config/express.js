'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const errorHandler = require('errorhandler');
const path = require('path');
const passport = require('passport');
const session = require('express-session');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
    app.use(express.static('public'));
    app.use(session({
        secret: 'secret'
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(morgan('dev'));
    app.use(errorHandler());
};