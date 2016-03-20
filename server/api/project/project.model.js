'use strict';

const mongoose = require('mongoose'),
			Schema = mongoose.Schema;

const ProjectSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
	stories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Story'
        }
    ],
	team: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {collection: 'project'});

module.exports = mongoose.model('Project', ProjectSchema);