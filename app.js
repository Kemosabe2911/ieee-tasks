const express= require('express');

const app= express();


//Routes
app.use('/',require('./routes/index'));
app.use('/tasks',require('./routes/tasks'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running at ${PORT}`));
