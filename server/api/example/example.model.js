'use strict';

const mongoose = require('mongoose'),
			Schema = mongoose.Schema;

const ExampleSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	availableAs: {
		type: Array,
		default: []
	}
}, {collection: 'example'});

module.exports = mongoose.model('Example', ExampleSchema);