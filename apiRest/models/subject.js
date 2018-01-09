'use strict'

const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird')
const Schema = mongoose.Schema;

const SubjectSchema = Schema({
    name: { type: String },
    titulacion: String,
    cuatrimestre: String,
    cantidad: Number,
    //student: String
   // student: [ String ]
    student: [{ type: Schema.Types.String, ref: 'Student' }]

});

module.exports = mongoose.model('Subject', SubjectSchema );