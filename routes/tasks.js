const express= require('express');
const router= express.Router();

//Task1
router.get('/task1',(req,res) => res.send('task1'));

//Task2
router.get('/task2',(req,res) => res.send('task2'));

module.exports = router;