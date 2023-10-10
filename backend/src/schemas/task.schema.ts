const TaskSchema = {
    type: "object",
    properties: {
        id: { type: "integer" },
        title: { type: "string" },
        description: {
            type: "string",
            allOf: [
                {
                    minLength: 0
                }
            ]
        },
        dueDate: { type: "string", format: "date" },
        assignedTo: {
            type: "string",
            allOf: [
                {
                    minLength: 1
                }
            ]
        },
        category: {
            type: "string",
            allOf: [
                {
                    minLength: 1
                }
            ]
        },
        status: { type: "string" },
    },
    required: ["title", "dueDate", "assignedTo", "category"],
    additionalProperties: false,
}

export default TaskSchema;