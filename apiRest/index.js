
const mongoose = require('mongoose');
const app = require('./app');

const config = require('./config');


mongoose.connect(config.db, (err, res) => {
  if (err){
    return console.log(`Error al conectar con base de datos: ${err}`)
  }
  console.log('Conexión a la base de atos establecida...')
  app.listen(config.port, () =>{
     console.log(`API REST corriendo en http://localhost:${config.port}`)
  })
})
