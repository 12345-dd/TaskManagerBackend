const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://mayurpatil98607:mayur123@cluster0.kulyrnk.mongodb.net/task-manager").then(()=>{
    console.log("Database is Connected");
}).catch((err)=>{
    console.log(`Error in Connected database - ${err}`)
})

const taskRoutes = require("./src/routes/TaskRoutes");

app.use("/tasks",taskRoutes);

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Server Started at port - ${PORT}`)
})
