import Task from "../interfaces/Task";

class TaskService {

    store: Array<Task> = [];

    createTask(task: Task): number {
        const lastItem = this.store.at(-1);
        let newId = 1;
        if (lastItem) newId = lastItem.id + 1;
        task.id = newId;
        task.createdAt = new Date();
        task.status = "Pending";
        this.store.push(task);
        return 1
    }

    deleteTaskById(id: number): number {
        const index = this.store.findIndex(e => e.id == id);
        if (index >= 0) {
            this.store.splice(index, 1);
            return 1;
        }
        return 0;
    }

    getTaskById(id: number): Task | null {
        const found = this.store.filter(e => e.id == id);
        if (found.length > 0) return found[0];
        return null;
    }

    updateTask(task: Task): number {
        const index = this.store.findIndex(e => e.id === task.id);
        if (index >=0) {
            const itemToUpdate = this.store[index];
            this.store[index] = {
                ...itemToUpdate,
                ...task
            };
            return 1;
        }
        return 0;
    }

    getAllTasks(): Array<Task> {
        
        return this.store;
    }
}

export default TaskService;