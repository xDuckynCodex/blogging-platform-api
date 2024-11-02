'use strict'
const { Schema, model } = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = 'Posts'
const COLLECTION_NAME = 'Post'

// Declare the Schema of the Mongo model
var postSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    category: {
        type: String,
        enum: ['Technology', 'Progamming', 'Sport']
    },
    tags: {
        type: Array,
        default: [],
    }
}, {
    collection: COLLECTION_NAME,
    timestamps: true
});

//Export the model
module.exports = model(DOCUMENT_NAME, postSchema);