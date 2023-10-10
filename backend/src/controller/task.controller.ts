import { Request, Response } from "express"
import Task from "../interfaces/Task";
import TaskService from "../services/task.service";

type RequestBody<T> = Request<{}, {}, T>;

class TaskController {

    taskService = new TaskService();

    createTask(req: RequestBody<Task>, res: Response) {
        const newTask = req.body;
        const result = this.taskService.createTask(newTask);
        if (result > 0) return res.send({ success: true, message: "Record created successfully" });
        return res.send({ success: false, message: "Unable to create record" });
    }

    deleteTaskById(req: Request<{ id: number }>, res: Response) {
        const result = this.taskService.deleteTaskById(req.params.id);
        if (result > 0) return res.send({ success: true, message: "Record deleted successfully" });
        return res.send({ success: false, message: "Unable to delete record" });
    }

    getTaskById(req: Request<{ id: number }>, res: Response) {
        const result = this.taskService.getTaskById(req.params.id);
        if (result) return res.send({ success: true, message: "Ok", data: result });
        return res.status(404).json({ success: false, message: "Record not found" });
    }

    updateTask(req: RequestBody<Task>, res: Response) {
        const newTask = req.body;
        const result = this.taskService.updateTask(newTask);
        if (result > 0) return res.send({ success: true, message: "Record updated successfully" });
        return res.send({ success: false, message: "Unable to update record" });
    }

    getAllTasks(req: Request, res: Response) {
        const result = this.taskService.getAllTasks();
        return res.send({ success: true, message: "Ok", data: result });
    }
}

export default TaskController;