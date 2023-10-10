interface Task {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    dueDate: Date;
    assignedTo: string;
    category: string;
    status: Status

}

type Status = "Pending" | "Completed";

export default Task;