'use strict'

const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird')
const Schema = mongoose.Schema;

const SubjectSchema = Schema({
    name: { type: String, lowercase:true },
    titulacion: String,
    cuatrimestre: String,
    //student: String
    student: { type: Object} 
    //{ type: Schema.ObjectId, ref: 'Student' }

});

module.exports = mongoose.model('Subject', SubjectSchema );