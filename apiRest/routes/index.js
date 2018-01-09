'use strict'

const express = require('express');
const studentCtrl = require('../controllers/student');
const subjectCtrl = require('../controllers/subject');
const cors = require('cors')

let corsOptions = { 
    origin: 'http://localhost:8100',
    optionsSuccessStatus: 200
}


const api = express.Router();

api.post('/register', studentCtrl.saveUser);
api.get('/students', studentCtrl.getStudents);
api.put('/student/:studentName', studentCtrl.updateStudent);


api.get('/subjects', subjectCtrl.getSubjects);
api.get('/subjects/:subjectName', subjectCtrl.getSubject);
api.get('/subjects/titulacion/:subjectName', subjectCtrl.getSubjectByBachelor);
api.get('/subjects/cuatrimestre/:subjectName', subjectCtrl.getSubjectBySemester);



api.post('/registerSubj', subjectCtrl.saveSubject);
api.put('/subjects/:subjectName', subjectCtrl.addStudent);

module.exports = api;