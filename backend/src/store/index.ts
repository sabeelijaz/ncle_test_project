import Task from "../interfaces/Task";

export default class TaskStore {

    public static store = [] as Array<Task> | null;

    public static getTaskStore(): Array<Task> {
        if (this.store) {
            return this.store;
        }
        this.store = [] as Array<Task>;

        return this.store;
    }
}