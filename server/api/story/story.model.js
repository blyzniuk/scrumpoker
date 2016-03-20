'use strict';

const mongoose = require('mongoose'),
			Schema = mongoose.Schema;

const StorySchema = new Schema({
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
                    ref: 'User'
                },
                text: {
                    type: String
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
                            ref: 'User'
                        },
                        mark: {
                            type: Number
                        }
                    }
                ]
            }
        ]
}, {collection: 'story'});

module.exports = mongoose.model('Story', StorySchema);