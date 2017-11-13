'use strict'

const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird')
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    email: String,
   // address: String,
});

module.exports = mongoose.model('Student', StudentSchema);