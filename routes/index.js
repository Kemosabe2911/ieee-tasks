const express= require('express');
const router= express.Router();
const path= require('path');
const axios = require("axios");

router.get('/',(req,res) => res.sendFile(path.join(__dirname,'..','public','index.html')));

module.exports = router;