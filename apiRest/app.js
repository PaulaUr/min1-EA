'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes');

const cors = require('cors');

app.use(cors());

//cargar rutas
//const user_routes = require('./routes/student');
//middlewares de body-parser

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar cabeceras y cors

//rutas base
app.use('/api', api);


module.exports = app;
