const express = require('express');
const router = express.Router();
const user = require("../UserController/UserController")
const Student = require("../Student controller/StudentController")
const {authentication, authorization} = require('../Middelware/Auth')

router.post('/User' , user.User)

router.post('/User/login' , user.loginUser)

router.post('/Student/:UserId' ,authentication ,Student.Createstudent )




module.exports = router;