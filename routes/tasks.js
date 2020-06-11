const express= require('express');
const router= express.Router();

//Task1
router.get('/task1',(req,res) => res.render('./public/Tasks'));

//Task2
router.get('/task2',(req,res) => res.send('task2'));

router.post('/task1', (req,res) =>{
    const {name, emial}= req.body;
    console.log(req.body);
});

module.exports = router;