const router = require("express").Router();
const TaskController = require("../controllers/TaskController");

router.post("/",TaskController.createTask);

router.get("/",TaskController.getTasks);

router.put("/:id",TaskController.updateTask);

router.delete("/:id",TaskController.deleteTask);

router.get("/search",TaskController.searchTasks);

module.exports = router;