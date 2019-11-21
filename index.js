const express = require('express'); //import

const app = express(); //creating an instant

app.get('/tasks', function(req, res){
    res.send("Send all tasks");
});

app.post('/tasks',(req, res) => {
    res.send("Create a new task");
});

app.put('/tasks', (req, res) =>{
    res.send("Not supported");

});

app.delete ('/tasks',(req, res)=>{
    res.send ("Delete all Tasks");
});

app.get('/tasks/:id', function (req, res) // '/'-> route ,  
{
   //console.log(req.headers);
    res.send(`Send a task with ${req.params.id}`);
});

app.listen(3000, () =>// app.listen-> run other apps 
{
    console.log('App is running at localhost:3000'); //display message
});
