const taskSchema = require("../models/TaskModel");

const createTask = async(req,res) => {
    try{
        const newTask = await taskSchema.create(req.body);
        if(newTask){
            res.status(201).json({
                message:"Task Created Successfully",
                data:newTask
            })
        }else{
            res.status(404).json({
                message:"Error in Creating new Task"
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            data:err
        })
    }
}

const getTasks = async(req,res) => {
    try{
        const tasks = await taskSchema.find().sort({createdAt:-1});
        if(tasks.length > 0){
            res.status(200).json({
                message:"Getting All Tasks Successfully",
                data:tasks
            })
        }else{
            res.status(404).json({
                message:"Error in getting Tasks"
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            data:err
        })
    }
}

const updateTask = async(req,res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const updatedTask = await taskSchema.findByIdAndUpdate(id,body,{new:true});
        if(updatedTask){
            res.status(200).json({
                message:"Task Updated Successfully",
                data:updatedTask
            })
        }else{
            res.status(404).json({
                message:"Error in Updating Task"
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            data:err
        })
    }
}

const deleteTask = async(req,res) => {
    try{
        const deletedTask = await taskSchema.findByIdAndDelete(req.params.id);
        if(deletedTask){
            res.status(200).json({
                message:"Task Deleted Successfully"
            })
        }else{
            res.status(404).json({
                message:"Error in deleting Task"
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            data:err
        })
    }
}

const searchTasks = async(req,res) => {
    const {keyword} = req.query;
    try{
        const tasks = await taskSchema.find({
            $or:[
                {title:{$regex:keyword,$options:'i'}},
                {description:{$regex:keyword,$options:'i'}}
            ]
        })
        if(tasks){
            res.status(200).json({
                data:tasks
            })
        }else{
            res.status(404).json({
                message:"Error in Searching Tasks"
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            data:err
        })
    }
}

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
    searchTasks
}