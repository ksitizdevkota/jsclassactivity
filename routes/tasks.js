const express = require('express');
const Task = require ('../models/tasks');
const router = express.Router();



router.route('/')
.get((req,res)=>{
    Task.find()
    .then((tasks)=>{
        res.json(tasks);
    });

})
.post((req,res)=>{

    Task.create(req.body)
   .then ((task)=>{
   res.json(task);
});
})

.put((req,res)=>{
    res.send("Not supported");

})

.delete((req,res)=>{

    Task.deleteMany({})
    .then((status)=> {
        res.json(status);
    })
})

router.route('/:id')
.get ((req,res)=>{
    Task.findById(req.params.id)
    .then((task)=> {
        res.json(task);
    });

})

.post((req,res)=>{
    res.send("Not Supported");
})

.put ((req,res)=>{
    Task.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
    .then((task)=> {
        res.json(task);
    });
})

.delete ((req,res)=>{
    Task.findByIdAndDelete(req.params.id)
        .then((task)=>{
            res.json(task);
        });
});

module.exports=router;