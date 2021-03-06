const express= require('express');
const path= require('path');
const axios= require('axios');
//const expressLayouts= require('express-ejs-layouts');


const app= express();

//EJS
//app.use(expressLayouts);
//app.set('view engine','ejs');

/*app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','Tasks'));
})*/

//Static Folder
//app.use(express.static(path.join(__dirname,'public')));

//Routes
app.use('/',require('./routes/index'));
app.use('/tasks',require('./routes/tasks'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running at ${PORT}`));
