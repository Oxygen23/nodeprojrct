const addCourse=require('../Controllers/courseController');
const express = require('express');
const router = express.Router();

//add course
router.post('/addCourse',addCourse);


module.exports = router;



