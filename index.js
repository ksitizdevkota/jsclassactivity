const express = require('express'); //import
const mongoose= require ('mongoose'); //impoeting mongoose
const taskRouter=require('./routes/tasks');

mongoose.connect('mongodb://127.0.0.1/test',{useNewUrlParser:true, useUnifiedTopology: true})
.then ((db)=> {
console.log("Successfully connected mongodb server");
})  //connecting mongoose, url/name of db

const app = express(); //creating an instant//
app.use(express.json()); //request bata aako data lai server ma pass garcha (decode)//
app.use('/tasks',taskRouter);

app.listen(3000, () =>// app.listen-> run other apps 
{
    console.log('App is running at localhost:3000'); //display message
});
