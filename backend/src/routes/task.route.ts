import express from "express";
import TaskController from "../controller/task.controller";
import TaskSchema from "../schemas/task.schema";
import SchemaValidator from "../helper/validator";

const TaskRouter = express.Router();
const schemaValidator = new SchemaValidator();
const taskController = new TaskController();

TaskRouter.post("/task", schemaValidator.validateBody(TaskSchema), taskController.createTask.bind(taskController));
TaskRouter.get("/task/:id", taskController.getTaskById.bind(taskController));
TaskRouter.put("/task", schemaValidator.validateBody(TaskSchema), taskController.updateTask.bind(taskController));
TaskRouter.delete("/task/:id", taskController.deleteTaskById.bind(taskController));
TaskRouter.get("/tasks", taskController.getAllTasks.bind(taskController));

export default TaskRouter;