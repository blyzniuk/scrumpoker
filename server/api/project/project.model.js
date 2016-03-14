'use strict';

const mongoose = require('mongoose'),
			Schema = mongoose.Schema;

const ExampleSchema = new Schema({
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
            _story_id: Schema.Types.ObjectId,
            title: {
                type: String,
                required: true
            },
            description: {
                type: String
            },
            mark: {
                type: Number
            },
            comments: [
                {
                    date: {
                        type: Date,
                        default: Date.now
                    },
                    author: {
                        type: Schema.Types.ObjectId,
                        ref: 'User',
                        required: true
                    },
                    text: {
                        type: String,
                        required: true
                    }
                }
            ],
            history: [
                {
                    date: {
                        type: Date,
                        default: Date.now
                    },
                    marks: [
                        {
                            author: {
                                type: Schema.Types.ObjectId,
                                ref: 'User',
                                required: true
                            },
                            mark: {
                                type: Number,
                                required: true
                            }
                        }
                    ]
                }
            ]
        }
    ],
	team: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {collection: 'example'});

module.exports = mongoose.model('Example', ExampleSchema);