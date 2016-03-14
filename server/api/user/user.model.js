'use strict';

const mongoose = require('mongoose'),
			Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
		required: true
	}
}, {collection: 'user'});

module.exports = mongoose.model('User', ExampleSchema);