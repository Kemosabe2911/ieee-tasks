const express= require('express');
const router= express.Router();
const path= require('path');
const axios = require("axios");

//Task1
router.get('/task1',(req,res) => res.sendFile(path.join(__dirname,'..','public','Tasks','tasks1.html')));

//Task2
router.get('/task2',(req,res) => res.send('task2'));

//Post Task1
/*
router.post('/task1',(req,res) =>{
    console.log(req.body);
    const{ name, email} = req.body;
});
*/

module.exports = router;