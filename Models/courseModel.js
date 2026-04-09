//import databases connection 
const config = require('../Config/Database');

const create = (course_name,course_code,callback) => {
    //insert course
    config.query('INSERT INTO course (course_name,course_code) VALUES (?,?)',
        [course_name,course_code],callback);
}


module.exports = create;

