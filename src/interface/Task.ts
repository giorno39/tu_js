export interface Task {
    id: number;
    description: string;
    assignee: string;
    status: string;
    priority: number;
    dueDate: Date;
}

export interface TaskAction {
    type: string;
    payload: Task;
}

export interface State {
    tasks: Task[];
}

export const taskReducer = (state: State, action: TaskAction) => {
    switch (action.type) {
        case "ADD_TASK":
            // set the id of the new task to be the length of the tasks array + 1
            action.payload.id = state.tasks.length + 1;
            return { ...state, tasks: [...state.tasks, action.payload] };
        case "DELETE_TASK":
            // Every list item will have a delete button, that will delete the selected list Item. Once deleted, all ID’s must be updated to go in order. Example: 1, 2, 3, 4 – we delete item with id: 3, after the deletion our ids should be updated like: 1, 2, 3 -> (this was previously 4).   
            const updatedTasks = state.tasks.filter((task) => task.id !== action.payload.id);
            const updatedTasksWithIdsInOrder = updatedTasks.map((task, index) => ({
                ...task,
                id: index + 1,
            }));
            return { ...state, tasks: updatedTasksWithIdsInOrder };
        case "UPDATE_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                ),
            };
        default:
            return state;
    }
}