const express= require('express');
const router= express.Router();

router.post('/Tasks/tasks1.html',(req,res)=>{
    console.log(req.body);
    res.send('Hello');
});

module.exports = router;