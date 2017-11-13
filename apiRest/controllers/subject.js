'use strict'
const Student = require('../models/student');
const Subject = require('../models/subject');

function getSubject (req, res){
    // let productId = req.params.productId
     Subject.find({ name: req.params.subjectName }, (err, subject) => {
     //  Product.findOne(productName, (err, product) =>{
       console.log(req.params.productName)
     if (err) 
     return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
      else if(!subject)
       return res.status(404).send({message:`El producto no existe`});
       else{
         req.subject = subject
         res.status(200).send(subject);
         //res.json(product)  
       }
         })
   }
   

function getSubjects(req,res) {
    Subject.find({}, (err, subjects) => {
        Student.populate(subjects, {path: 'student'}, (err, subjects) => {
        if (err) 
            return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
            else if (!subjects) 
                return res.status(404).send({message:`No existen subjects` });
          else{ 
           // console.log(products)
            res.status(200).send(subjects);
    //   res.json(products)
         }  
        });
        
         
    });  
}

function saveSubject(req,res){
    
    const subject = new Subject({
        name: req.body.name,
        titulacion : req.body.titulacion,
        cuatrimestre : req.body.cuatrimestre
    
    });        
     subject.save((err, subjectStored) => {
            if(err){ 
                return res.status(500).send({message: `Error al crear el usuario: ${err} `});
                } else {
                 //return res.json(productStored);
                 res.status(200).send({subject: subjectStored});

              }
        });
    

}
//Add user to Subject
function addStudent (req, res ){
    //let productId = req.params.productId
  //  let productName = req.params.productName
    //console.log(req.params.productName)
  //  console.log(req.body)
  //  let update = req.body

    Student.find({ name: req.body.student }, (err, student) => {
        //  Product.findOne(productName, (err, product) =>{
          console.log(req.body.student)
        if (err) 
        return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
         else if(!student)
          return res.status(404).send({message:`El producto no existe`});
          else{
          //  req.subject = subject;
            console.log(student);
           // res.status(200).send(product);
           // res.json(subject);
            Subject.update( {_id: req.params.subject_id}, {student: student._id}, (err, subjectUpdated) =>{
               // console.log(req.params.subjectStudent)                
                if(err){
                return res.status(500).send({message: `Error al actualizar el producto: ${err}`});
                }else if(!subjectUpdated)
                  return res.status(404).send({message: 'No existe ese producto'});
                 else{
                  console.log(subjectUpdated)
                  res.status(200).send({subject: subjectUpdated});
                }
              
              });
           
          }
            });

  
  }


module.exports = {
    getSubjects,
    getSubject,
    saveSubject,
    addStudent
};