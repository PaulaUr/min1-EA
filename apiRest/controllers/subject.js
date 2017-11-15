'use strict'
const Student = require('../models/student');
const Subject = require('../models/subject');

function getSubject (req, res){
    // let productId = req.params.productId
     Subject.find({ name: req.params.subjectName }, (err, subject) => {
     //  Product.findOne(productName, (err, product) =>{
     //  console.log(req.params.productName)
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
       // Student.populate(subjects, {path: 'student'}, (err, subjects) => {
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
  
  const subj = new Subject({
    name : req.body.name,
    student : req.body.student,
    _id : req.body._id,
  });       

  Subject.find({name: req.params.subjectName} ,(err,subjectInfo) => {
      //  console.log('SubjectFind: ',req.params.subjectName); 

    if (err) 
    return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
     else if(!subjectInfo)
      return res.status(404).send({message:`El producto no existe`});
      else{
        req.subject = subjectInfo
        //res.json(product)
        console.log('Infode la subject:', subjectInfo);  

        console.log('Student before StudentFind:',subj.student);  

    Student.findOne({ name: subj.student }, (err, studentInfo) => {
        if (err) 
        return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
         else if(!studentInfo)
          return res.status(404).send({message:`El student no existe`});
          if(studentInfo){
            req.studentInfo = studentInfo;
         console.log('Result of FIND:',studentInfo)          

         
            Subject.findOneAndUpdate({name: req.params.subjectName},{$push: {student: studentInfo.name}} , (err, subjectUpdated) =>{
            console.log('esto lopaso al update', studentInfo.name) 
            console.log('En el Update:',req.params.subjectName );  

                if(err){
                return res.status(500).send({message: `Error al actualizar el producto: ${err}`});
                }else if(!subjectUpdated)
                  return res.status(404).send({message: 'No puedo actualizar esta asignatura'});
                 else{
                  console.log(subjectUpdated)
                  res.status(200).send({subject: subjectUpdated});
                }
              
              });
           
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