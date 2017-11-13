'use strict'
const Student = require('../models/student');
const Subject = require('../models/subject');


function getStudents(req,res) {
    Student.find({}, (err, Students) => {
        if (err) 
        return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        else if (!Students) 
         return res.status(404).send({message:`No existen subjects` });
          else{ 
           // console.log(products)
            res.status(200).send(Students);
    //   res.json(products)
         }  
         
    });  
}
function saveUser(req,res){
    
    //crear objeto usuario
    const student = new Student();
//recoger body de la peticion
    const params = req.body;
    console.log(params);
//asignar valores a objeto usuario
    student.name = params.name;
    student.email = params.email;
   
   // student.phone = {home: params.phone.home, work: params.phone.work};

    student.save((err,studentStored) => {
        if(err){ 
            return res.status(500).send({message: `Error al crear el usuario: ${err} `});
            } else {
             return res.json(studentStored);
             //res.status(200).send({student: studentStored});
          }  
    });
}
function updateStudent (req, res ){
    //let productId = req.params.productId
  //  let productName = req.params.productName
    console.log(req.params.productName)
    console.log(req.body)
    let update = req.body
  
    Student.findOneAndUpdate( {name: req.params.studentName}, update, (err, studentUpdated) =>{
      if(err){
      return res.status(500).send({message: `Error al actualizar el producto: ${err}`});
      }else if(!studentUpdated)
        return res.status(404).send({message: 'No existe ese producto'});
       else{
        console.log(studentUpdated)
        res.status(200).send({student: studentUpdated});
      }
    
    })
}




module.exports = {
    getStudents,
    saveUser,
    updateStudent
};