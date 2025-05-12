const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum:["Pending","Completed"],
        default:"Pending"
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Task",taskSchema)