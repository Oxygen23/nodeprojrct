//import model in
const course = require('../Models/courseModel');

//insert add post
const addCourse = (req,res) =>{
    const {course_name,course_code} = req.body;
    course.create(course_name,course_code,(err,message) => {

      if(err){

        res.status(500).json({error:'failed to add course'});
      }else{

        res.status(200).json({message:'course added successfull'});
      }
    if(!course_name || !course_code){

       return res.status(400).json({error:'course name and course code are required'});
      }else{

       course.create({course_name,course_code},(err,message)=>{
        if(err){
          
           res.status(500).json({err:'failed to add course'});
        }else{
          res.status(200).json({message:'course added'});
        }
        
      });       

      }

});}

module.exports =addCourse;

