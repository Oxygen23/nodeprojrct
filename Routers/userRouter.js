const express = require('express');
const router = express.Router();
const {getUser ,getUsers,getOneUser,addUser}= require('../Controllers/userController');

router.get('/',getUser);
router.get('/users',getUsers);
router.get('/users/:id',getOneUser);
router.post('/users',addUser)


module.exports = router;


